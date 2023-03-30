import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class FormProject extends BasePage {

    private nameProject: string = '//div/input[@id="edit_project_modal_field_name"]'
    private checkProject: string = '//div/input[@name="is_favorite"]'
    private checkPanel: string = '//span[@class="edit_project_modal__view_radio_button"]/button[@aria-labelledby="project_list_board_style_option"]'
    private buttonSubmit: string = '//form[@class="edit_project_modal__form"]/footer/div/button[@type="submit"]'
    constructor() {
        super()
    }
    async setProjectName(nameProject: string) {
        await ElementActions.setText(this.nameProject, nameProject)
    }
    async clickCheckProject() {
        await ElementActions.click(this.checkProject)
    }
    async clickPanelBoard() {
        await ElementActions.click(this.checkPanel)
    }
    async actionSubmit() {
        await ElementActions.click(this.buttonSubmit)
    }
}
export const formProject = new FormProject()