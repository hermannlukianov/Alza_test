class MainPage {

    get bannerMainPage() { 
        return $('#LocalTitleBanner'); 
    }

    get searchBar() { 
        return $('//android.widget.EditText'); 
    }

    get searchBarClicked() {
        return $(`//android.widget.EditText[@resource-id="SearchTextField"]`);
    }

    get searchBarString() {
        return $(`//android.widget.TextView[@text="What are you looking for?"]`)
    }

    get vyprodejSection() {
        return $(`//android.widget.TextView[@text="Mega výprodej"]`)
    }


}

module.exports = new MainPage();