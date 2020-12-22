// Container for a project's information/data
export default class ProjectInfo {
    constructor(imageNames, title, oneLiner, description, role, techUsed, difficulties, solution, notable, srcLink, liveLink) {
        this.imageNames = imageNames;
        this.title = title
        this.oneLiner = oneLiner;
        this.description = description;
        this.role = role;
        this.techUsed = techUsed;
        this.difficulties = difficulties;
        this.solution = solution;
        this.notable = notable;
        this.srcLink = srcLink;
        this.liveLink = liveLink;
    }
}
