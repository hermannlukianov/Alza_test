import Gestures from "../hepers/Gestures";
import LoginPage from "../screenObjects/LoginPage";
import MainPage, { searchBar } from "../screenObjects/MainPage";
import LowerBar from "../screenObjects/LowerBar";
import Search from "../screenObjects/Search";
import Helpers from "../hepers/Helpers";


describe("Main Screen functionality", () => {
  
  it("Log in", async () => {

    /*
    // with credentials (needs an sms code)
    await LoginPage.loginButton1.click();
    await LoginPage.login();
    await browser.pause(5000);
    */

    //with skip button
    await LoginPage.skipButton.click();

  });

  it("Lower bar presented", async () => {
    
    // home
    /////
    await LowerBar.favourite.isDisplayed();
    await LowerBar.cart.isDisplayed();
    await LowerBar.orders.isDisplayed();
    await LowerBar.menu.isDisplayed();

  });

  it("Main page", async () => {

    await MainPage.bannerMainPage.isDisplayed();
    await MainPage.searchBar.isDisplayed();
    await MainPage.searchBarString.isDisplayed();

    //await Gestures.swipeUp(0.75);
    await MainPage.vyprodejSection.isDisplayed();

  });

  it("Search", async () => {

    await MainPage.searchBar.click();
    await MainPage.searchBarClicked.setValue(`iphone 15`);

    //check if the sections are presented during search
    await Search.categorySection.isDisplayed();
    await Search.goodsSection.isDisplayed();
    await Search.articlesSection.isDisplayed();
    
    //scroll to the Show all results button
    await Helpers.scrollUntilButtonPresented(`class name`, `android.widget.Button`);
    await Search.showAllResults.click();

  });

  it("Filtering", async () => {
    /*
    //sort high to low
    await Search.sortButton.click();
    await Search.highToLow.click();

    //price range and check if 1 filter is applied
    await Search.rangeEnd.dragElementToLeft(-20, 0);
    await Search.filterApplied.isDisplayed();

    await browser.pause(5000);
    */
  });

});