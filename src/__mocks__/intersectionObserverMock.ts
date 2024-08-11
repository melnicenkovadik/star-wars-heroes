export {};
class IntersectionObserverMock {
    observe() {
        return null;
    }
    unobserve() {
        return null;
    }
    disconnect() {
        return null;
    }
}

// @ts-ignore
global.IntersectionObserver = IntersectionObserverMock;
