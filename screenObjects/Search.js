class Search {

    get categorySection() { 
        return $('//android.widget.TextView[@text="Category"]'); 
    }

    get goodsSection() { 
        return $('//android.widget.TextView[@text="Goods"]'); 
    }

    get articlesSection() { 
        return $('//android.widget.TextView[@text="Articles"]'); 
    }

    get sortButton() { 
        return $('//android.view.View[@resource-id="SortButton"]/android.widget.Button'); 
    }

    get filterButton() { 
        return $('//android.view.View[@resource-id="ToolbarFilterButton"]/android.widget.Button'); 
    }

    get rangeEnd() {
        return $(`#Range end`);
    }

    //sort
    get highToLow() {
        return $(`//android.widget.ScrollView/android.view.View[3]/android.widget.Button`);
    }

    get showAllResults() {
        return $(`//android.view.View[@resource-id="SearchFooterButton"]/android.widget.Button`)
    }

    get filterApplied() {
        return $(`//android.widget.TextView[@text="1"]`);
    }

    dragElementToLeft(xOffset, yOffset) {
        this.draggableElement.dragAndDrop({ x: xOffset, y: yOffset });
    }

    
}

module.exports = new Search();