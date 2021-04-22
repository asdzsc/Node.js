class Page {
    // static pageSize = 10;
    // static currentPage = 1;
    constructor() {
        this.currentPage = 1;
        this.pageSize = 5;
        this.currentRoute = "#/index/users";
    }
    reset() {
        this.currentPage = 1;
        this.pageSize = 5;
    }
    setCurrentRoute(route) {
        this.currentRoute = route;
    }
    setCurrentPage(currentPage) {
        this.currentPage = currentPage;
    }
}

export default new Page();