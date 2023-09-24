import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from './Router'
import { getCurrentPath } from './utils'
import { Route } from './Route'
import { Link } from './Link'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render if no routes matched', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using links', () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about' >Go to About</Link>
                            </>
                        )
                    }} />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )


        const anchor= screen.getByText(/Go to About/)
        
        fireEvent.click(anchor)

        const aboutTitle = screen.findByText('About')

        expect(aboutTitle).toBeTruthy()
    })


})