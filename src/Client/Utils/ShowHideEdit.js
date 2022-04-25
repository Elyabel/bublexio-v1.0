import Left from '../../StylesSheets/LeftPanel.css';

import $ from 'jquery';

export class ShowHideEdit {

    static HideNotLoggedIn() {
        $(`.${Left.NotLogged}`).hide();
    }

    static ShowNotLoggedIn() {
        $(`.${Left.NotLogged}`).show();
    }

    static ShowAccountVue() {
        $(`.${Left.IsLogged}`).show();
    }

    static HideAccountVue() {
        $(`.${Left.IsLogged}`).hide();
    }
}