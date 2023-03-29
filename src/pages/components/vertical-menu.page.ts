import { ElementActions } from "../../core/element-actions";
import { MouseActions } from "../../core/mouse-actions";
import { BasePage } from "../base.page";

class VerticalMenuPage extends BasePage {
    private addProjectButton: string = ' //div/button[@aria-label="Añadir proyecto"]'
    private projectsLabel: string = '//div[@id="left_menu_inner"]//div[text()="Proyectos"]'
    constructor() {
        super()
    }
    async clickAddProject() {
        await ElementActions.click(this.addProjectButton)
    }
    async hoverProjectLabel() {
        await MouseActions.hover(this.projectsLabel)
    }
}
export const verticalMenu = new VerticalMenuPage()