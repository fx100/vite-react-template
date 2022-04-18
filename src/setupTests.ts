import '@testing-library/jest-dom'
import { server as mocksServer } from '~/mocks/server'

beforeAll(() => mocksServer.listen({ onUnhandledRequest: 'bypass' }))
afterEach(() => mocksServer.resetHandlers())
afterAll(() => mocksServer.close())
