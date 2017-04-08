

var onSelectionChanged = function(context) {

    action = context.actionContext;
    document = action.document;
    selection = action.newSelection;


    count = selection.count();
    if (count == 0) {

        document.hideMessage();

    } else {

        if (count == 1) {
            message = "Artboard selected."
        } else {
            message = count + " artboard selected."
        }

        document.showMessage(message);
    }

};
