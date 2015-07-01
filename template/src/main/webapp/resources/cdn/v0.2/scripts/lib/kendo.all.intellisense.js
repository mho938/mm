

intellisense.annotate(kendo, {
    Class: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Class</summary>
        /// </signature>
    }
});

kendo.Class = (function() {
var original = kendo.Class;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Color: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Color</summary>
        /// </signature>
    }
});

kendo.Color = (function() {
var original = kendo.Color;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    diff: function() {
        /// <signature>
        /// <summary>
        /// Computes the relative luminance between two colors.
        /// </summary>
        /// <returns type="Number">The relative luminance.</returns>
        /// </signature>
    },
    equals: function() {
        /// <signature>
        /// <summary>
        /// Compares two color objects for equality.
        /// </summary>
        /// <returns type="Boolean">returns true if the two colors are the same. Otherwise, false</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Layout</summary>
        /// </signature>
    }
});

kendo.Layout = (function() {
var original = kendo.Layout;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    showIn: function(container,view,transitionClass) {
        /// <signature>
        /// <summary>
        /// Renders the View element in the element specified by the selector
        /// </summary>
        /// <param name="container" type="String" >The selector of the container in which the view element will be appended.</param>
        /// <param name="view" type="kendo.View" >The view instance that will be rendered.</param>
        /// <param name="transitionClass" type="string" >Optional. If provided, the new view will replace the current one with a replace effect.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Observable: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Observable</summary>
        /// </signature>
    }
});

kendo.Observable = (function() {
var original = kendo.Observable;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>
        /// </signature>
    },
    one: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >A function to execute each time the event is triggered. That function should have a single parameter which will contain any event specific data.</param>
        /// </signature>
    },
    trigger: function(eventName,eventData) {
        /// <signature>
        /// <summary>
        /// Executes all handlers attached to the given event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event to trigger.</param>
        /// <param name="eventData" type="Object" >Optional event data which will be passed as an argument to the event handlers.</param>
        /// </signature>
    },
    unbind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Remove a previously attached event handler.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event. If not specified all handlers of all events will be removed.</param>
        /// <param name="handler" type="Function" >The handler which should no longer be executed. If not specified all handlers listening to that event will be removed.</param>
        /// </signature>
    }



});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    Router: function() {
        /// <signature>
        /// <summary>Constructor of kendo.Router</summary>
        /// </signature>
    }
});

kendo.Router = (function() {
var original = kendo.Router;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    start: function() {
        /// <signature>
        /// <summary>
        /// Activates the router binding to the URL fragment part changes.
        /// </summary>
        /// </signature>
    },
    route: function(route,callback) {
        /// <signature>
        /// <summary>
        /// Specifies a callback for the given route. The route definition can contain bound parameters, optional segments, and route globbing.
/// The parsed parts of the URL are passed as parameters to the route callback. Query string parameters are parsed and passed as last argument of the callback function.
        /// </summary>
        /// <param name="route" type="String" >The route definition.</param>
        /// <param name="callback" type="Function" >The callback to be executed when the route is matched.</param>
        /// </signature>
    },
    navigate: function(route,silent) {
        /// <signature>
        /// <summary>
        /// Navigates to the given route.
        /// </summary>
        /// <param name="route" type="String" >The route to navigate to.</param>
        /// <param name="silent" type="Boolean" >If set to true, the router callbacks will not be called.</param>
        /// </signature>
    },
    replace: function(route,silent) {
        /// <signature>
        /// <summary>
        /// Navigates to the given route, replacing the current view in the history stack (like history.replaceState or location.replace work).
        /// </summary>
        /// <param name="route" type="String" >The route to navigate to.</param>
        /// <param name="silent" type="Boolean" >If set to true, the router callbacks will not be called.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Unbinds the router instance listeners from the URL fragment part changes.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo, {
    View: function() {
        /// <signature>
        /// <summary>Constructor of kendo.View</summary>
        /// </signature>
    }
});

kendo.View = (function() {
var original = kendo.View;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Removes the View element from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    render: function(container) {
        /// <signature>
        /// <summary>
        /// Renders the view contents. Accepts a jQuery selector (or jQuery object) to which the contents will be appended.
/// Alternatively, the render method can be called without parameters in order to retrieve the View element for manual insertion/further manipulation.
        /// </summary>
        /// <param name="container" type="jQuery" >(optional) the element in which the view element will be appended.</param>
        /// <returns type="jQuery">the view element.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Binder: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Binder</summary>
        /// </signature>
    }
});

kendo.data.Binder = (function() {
var original = kendo.data.Binder;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Invoked by the Kendo UI MVVM framework when the bound view model value is changed. The binder should update the UI (HTML element or Kendo UI widget) to reflect the view model change.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    DataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.DataSource</summary>
        /// </signature>
    }
});

kendo.data.DataSource = (function() {
var original = kendo.data.DataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    add: function(model) {
        /// <signature>
        /// <summary>
        /// Appends a data item to the data source.
        /// </summary>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the data item field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>
        /// </signature>
    },
    aggregate: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the aggregate configuration.
        /// </summary>
        /// <param name="value" type="Object" >The aggregate configuration. Accepts the same values as the aggregate option.</param>
        /// <returns type="Array">the current aggregate configuration.</returns>
        /// </signature>
    },
    aggregates: function() {
        /// <signature>
        /// <summary>
        /// Returns the aggregate results.
        /// </summary>
        /// <returns type="Object">the aggregate results. There is a key for every aggregated field.</returns>
        /// </signature>
    },
    at: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index. The index is zero-based.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data item.</param>
        /// <returns type="kendo.data.ObservableObject">the data item at the specified index. Returns undefined if a data item is not found at the specified index.Returns a kendo.data.Model instance if the schema.model option is set.</returns>
        /// </signature>
    },
    cancelChanges: function(model) {
        /// <signature>
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The optional data item (model). If specified only the changes of this data item will be discarded. If omitted all changes will be discarded.</param>
        /// </signature>
    },
    data: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the data items of the data source.If the data source is bound to a remote service (via the transport option) the data method will return the service response.
/// Every item from the response is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is bound to a JavaScript array (via the data option) the data method will return the items of that array.
/// Every item from the array is wrapped in a kendo.data.ObservableObject or kendo.data.Model (if the schema.model option is set).If the data source is grouped (via the group option or the group method) and the serverGrouping is set to true
/// the data method will return the group items.
        /// </summary>
        /// <param name="value" type="Object" >The data items which will replace the current ones in the data source. If omitted the current data items will be returned.</param>
        /// <returns type="kendo.data.ObservableArray">the data items of the data source. Returns empty array if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>
        /// </signature>
    },
    fetch: function(callback) {
        /// <signature>
        /// <summary>
        /// Reads the data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="callback" type="Function" >The optional function which is executed when the remote request is finished.  The function context (available via the this keyword) will be set to the data source instance.</param>
        /// </signature>
    },
    filter: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the filter configuration.
        /// </summary>
        /// <param name="value" type="Object" >The filter configuration. Accepts the same values as the filter option (check there fo more examples).</param>
        /// <returns type="Object">the current filter configuration.</returns>
        /// </signature>
    },
    get: function(id) {
        /// <signature>
        /// <summary>
        /// Gets the data item (model) with the specified id.
        /// </summary>
        /// <param name="id" type="Object" >The id of the model to look for.</param>
        /// <returns type="kendo.data.Model">the model instance. Returns undefined if a model with the specified id is not found.</returns>
        /// </signature>
    },
    getByUid: function(uid) {
        /// <signature>
        /// <summary>
        /// Gets the data item (model) with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the model to look for.</param>
        /// <returns type="kendo.data.ObservableObject">the model instance. Returns undefined if a model with the specified uid is not found.</returns>
        /// </signature>
    },
    group: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the grouping configuration.
        /// </summary>
        /// <param name="value" type="Object" >The grouping configuration. Accepts the same values as the group option.</param>
        /// <returns type="Array">the current grouping configuration.</returns>
        /// </signature>
    },
    hasChanges: function() {
        /// <signature>
        /// <summary>
        /// Cheks if the data itams have changed.
        /// </summary>
        /// <returns type="Boolean">returns true if the data items have changed. Otherwise, false.</returns>
        /// </signature>
    },
    indexOf: function(dataItem) {
        /// <signature>
        /// <summary>
        /// Gets the index of the specified data item.
        /// </summary>
        /// <param name="dataItem" type="kendo.data.ObservableObject" >The target data item.</param>
        /// <returns type="Number">the index of the specified data item. Returns -1 if the data item is not found.</returns>
        /// </signature>
    },
    insert: function(index,model) {
        /// <signature>
        /// <summary>
        /// Inserts a data item in the data source at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index at which the data item will be inserted.</param>
        /// <param name="model" type="Object" >Either a kendo.data.Model instance or JavaScript object containing the field values.</param>
        /// <returns type="kendo.data.Model">the data item which is inserted.</returns>
        /// </signature>
    },
    page: function(page) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current page.
        /// </summary>
        /// <param name="page" type="Number" >The new page.</param>
        /// <returns type="Number">the current page.</returns>
        /// </signature>
    },
    pageSize: function(size) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current page size.
        /// </summary>
        /// <param name="size" type="Number" >The new page size.</param>
        /// <returns type="Number">the current page size.</returns>
        /// </signature>
    },
    pushCreate: function(items) {
        /// <signature>
        /// <summary>
        /// Appends the specified data item(s) to the data source without marking them as "new". The data source will not sync data items appended via pushCreate.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to append to the data source.</param>
        /// </signature>
    },
    pushDestroy: function(items) {
        /// <signature>
        /// <summary>
        /// Removes the specified data item(s) from the data source without marking them as "removed". The data source will not sync data items appended via pushDestroy.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to remove from the data source.</param>
        /// </signature>
    },
    pushUpdate: function(items) {
        /// <signature>
        /// <summary>
        /// Updates the specified data item(s) without marking them as "dirty". The data source will not sync data items appended via pushUpdate.
/// If the data items are not found (using schema.model.id) they will be appended.
        /// </summary>
        /// <param name="items" type="Object" >The data item or data items to update.</param>
        /// </signature>
    },
    query: function(options) {
        /// <signature>
        /// <summary>
        /// Executes the specified query over the data items. Makes a HTTP request if bound to a remote service.
        /// </summary>
        /// <param name="options" type="" >The query options which should be applied.</param>
        /// </signature>
    },
    read: function(data) {
        /// <signature>
        /// <summary>
        /// Reads data items from a remote service (if the transport option is set) or from a JavaScript array (if the data option is set).
        /// </summary>
        /// <param name="data" type="Object" >Optional data to pass to the remote service.</param>
        /// </signature>
    },
    remove: function(model) {
        /// <signature>
        /// <summary>
        /// Removes the specified data item from the data source.
        /// </summary>
        /// <param name="model" type="kendo.data.Model" >The data item which should be removed.</param>
        /// </signature>
    },
    sort: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the sort order which will be applied over the data items.
        /// </summary>
        /// <param name="value" type="Object" >The sort configuration. Accepts the same values as the sort option.</param>
        /// <returns type="Array">the current sort configuration.</returns>
        /// </signature>
    },
    sync: function() {
        /// <signature>
        /// <summary>
        /// Saves any data item changes.The sync method will request the remote service if:
        /// </summary>
        /// </signature>
    },
    total: function() {
        /// <signature>
        /// <summary>
        /// Gets the total number of data items. Uses schema.total if the transport.read option is set.
        /// </summary>
        /// <returns type="Number">the total number of data items. Returns the length of the array returned by the data method if schema.total or transport.read are not set.Returns 0 if the data source hasn't been populated with data items via the read, fetch or query methods.</returns>
        /// </signature>
    },
    totalPages: function() {
        /// <signature>
        /// <summary>
        /// Gets the number of available pages.
        /// </summary>
        /// <returns type="Number">the available pages.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Returns the data items which correspond to the current page, filter, sort and group configuration.To ensure that data is available this method should be used within the change event handler or the fetch method.
        /// </summary>
        /// <returns type="kendo.data.ObservableArray">the data items. Returns groups if the data items are grouped (via the group option or the group method).</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    HierarchicalDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.HierarchicalDataSource</summary>
        /// </signature>
    }
});

kendo.data.HierarchicalDataSource = (function() {
var original = kendo.data.HierarchicalDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Model: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Model</summary>
        /// </signature>
    }
});

kendo.data.Model = (function() {
var original = kendo.data.Model;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    editable: function(field) {
        /// <signature>
        /// <summary>
        /// Determines if the specified field is editable or not.
        /// </summary>
        /// <param name="field" type="String" >The field to check.</param>
        /// <returns type="Boolean">true if the field is editable; false otherwise.</returns>
        /// </signature>
    },
    get: function() {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the get section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    isNew: function() {
        /// <signature>
        /// <summary>
        /// Checks if the Model is new or not. The id field is used to determine if a model instance is new or existing one.
/// If the value of the field specified is equal to the default value (specified through the fields configuration) the model is considered as new.
        /// </summary>
        /// <returns type="Boolean">true if the model is new; false otherwise.</returns>
        /// </signature>
    },
    set: function() {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified field. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the set section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the Model. Inherited from kendo.data.ObservableObject. Examples and more info can be found in the toJSON section of the
/// ObservableObject API reference.
        /// </summary>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    Node: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.Node</summary>
        /// </signature>
    }
});

kendo.data.Node = (function() {
var original = kendo.data.Node;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(model) {
        /// <signature>
        /// <summary>
        /// Appends a new item to the children data source, and initializes it if necessary.
        /// </summary>
        /// <param name="model" type="Object" >The data for the new item</param>
        /// </signature>
    },
    level: function() {
        /// <signature>
        /// <summary>
        /// Gets the current nesting level of the node within the data source.
        /// </summary>
        /// <returns type="Number">the zero based level of the node.</returns>
        /// </signature>
    },
    load: function() {
        /// <signature>
        /// <summary>
        /// Loads the child nodes in the child data source, supplying the id of the Node to the request.
        /// </summary>
        /// </signature>
    },
    loaded: function() {
        /// <signature>
        /// <summary>
        /// Gets or sets the loaded flag of the Node. Setting the loaded flag to false allows reloading of child items.
        /// </summary>
        /// </signature>
    },
    parentNode: function() {
        /// <signature>
        /// <summary>
        /// Gets the parent node.
        /// </summary>
        /// <returns type="kendo.data.Node">the parent of the node; null if the node is a root node or doesn't have a parent.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    ObservableArray: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.ObservableArray</summary>
        /// </signature>
    }
});

kendo.data.ObservableArray = (function() {
var original = kendo.data.ObservableArray;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function(eventName,handler) {
        /// <signature>
        /// <summary>
        /// Attaches an event handler for the specified event.
        /// </summary>
        /// <param name="eventName" type="String" >The name of the event.</param>
        /// <param name="handler" type="Function" >The function which will be invoked when the event is raised.</param>
        /// </signature>
    },
    join: function(separator) {
        /// <signature>
        /// <summary>
        /// Joins all items of an ObservableArray into a string. Equivalent of
/// Array.prototype.join.
        /// </summary>
        /// <param name="separator" type="String" >Specifies the string to separate each item of the array. If omitted the array items are separated with a comma (,)</param>
        /// </signature>
    },
    parent: function() {
        /// <signature>
        /// <summary>
        /// Gets the parent of the array if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the array; undefined if the array is not nested and doesn't have a parent.</returns>
        /// </signature>
    },
    pop: function() {
        /// <signature>
        /// <summary>
        /// Removes the last item from an array and returns that item. Equivalent of Array.prototype.pop.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>
        /// </signature>
    },
    push: function() {
        /// <signature>
        /// <summary>
        /// Appends the given items to the array and returns the new length of the array. Equivalent of Array.prototype.push.
/// The new items are wrapped as ObservableObject if they are complex objects.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>
        /// </signature>
    },
    slice: function(begin,end) {
        /// <signature>
        /// <summary>
        /// Returns a one-level deep copy of a portion of an array. Equivalent of
/// Array.prototype.slice.
/// The result of the slice method is not an instance of ObvservableArray. It is a regular JavaScript Array object.
        /// </summary>
        /// <param name="begin" type="Number" >Zero-based index at which to begin extraction.</param>
        /// <param name="end" type="Number" >Zero-based index at which to end extraction. If end is omitted, slice extracts to the end of the sequence.</param>
        /// </signature>
    },
    splice: function(index,howMany) {
        /// <signature>
        /// <summary>
        /// Changes an ObservableArray, by adding new items while removing old items. Equivalent of
/// Array.prototype.splice
        /// </summary>
        /// <param name="index" type="Number" >Index at which to start changing the array. If negative, will begin that many elements from the end.</param>
        /// <param name="howMany" type="Number" >An integer indicating the number of items to remove. If set to 0, no items are removed. In this case, you should specify at least one new item.</param>
        /// <returns type="Array">containing the removed items. The result of the splice method is not an instance of ObvservableArray.</returns>
        /// </signature>
    },
    shift: function() {
        /// <signature>
        /// <summary>
        /// Removes the first item from an ObvservableArray and returns that item. Equivalent of Array.prototype.shift.
        /// </summary>
        /// <returns type="Object">the item which was removed.</returns>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Returns a JavaScript Array which represents the contents of the ObservableArray.
        /// </summary>
        /// </signature>
    },
    unshift: function() {
        /// <signature>
        /// <summary>
        /// Adds one or more items to the beginning of an ObservableArray and returns the new length.  Equivalent of Array.prototype.unshift.
        /// </summary>
        /// <returns type="Number">the new length of the array.</returns>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    ObservableObject: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.ObservableObject</summary>
        /// </signature>
    }
});

kendo.data.ObservableObject = (function() {
var original = kendo.data.ObservableObject;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    get: function(name) {
        /// <signature>
        /// <summary>
        /// Gets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <returns type="Object">the value of the specified field.</returns>
        /// </signature>
    },
    parent: function() {
        /// <signature>
        /// <summary>
        /// Gets the parent of the object if such parent exists.
        /// </summary>
        /// <returns type="kendo.data.ObservableObject">the parent of the object; undefined if the object is not nested and doesn't have a parent.</returns>
        /// </signature>
    },
    set: function(name,value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the specified field.
        /// </summary>
        /// <param name="name" type="String" >The name of the field whose value is going to be returned.</param>
        /// <param name="value" type="Object" >The new value of the field.</param>
        /// </signature>
    },
    toJSON: function() {
        /// <signature>
        /// <summary>
        /// Creates a plain JavaScript object which contains all fields of the ObservableObject.
        /// </summary>
        /// <returns type="Object">which contains only the fields of the ObservableObject.</returns>
        /// </signature>
    },


    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    SchedulerDataSource: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.SchedulerDataSource</summary>
        /// </signature>
    }
});

kendo.data.SchedulerDataSource = (function() {
var original = kendo.data.SchedulerDataSource;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    expand: function(start,end) {
        /// <signature>
        /// <summary>
        /// Expands all recurring events in the data and returns a list of events for a specific period.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">the expanded list of scheduler events filtered by the specified start/end period.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.data, {
    SchedulerEvent: function() {
        /// <signature>
        /// <summary>Constructor of kendo.data.SchedulerEvent</summary>
        /// </signature>
    }
});

kendo.data.SchedulerEvent = (function() {
var original = kendo.data.SchedulerEvent;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    clone: function(options,updateUid) {
        /// <signature>
        /// <summary>
        /// Clones the scheduler event.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <param name="updateUid" type="Boolean" >If you pass true the uid of the event will be preserved.</param>
        /// <returns type="kendo.data.SchedulerEvent">the cloned scheduler event.</returns>
        /// </signature>
    },
    duration: function() {
        /// <signature>
        /// <summary>
        /// Returns the scheduler event length in milliseconds.
        /// </summary>
        /// <returns type="Number">the length of the event.</returns>
        /// </signature>
    },
    expand: function(start,end,timeZoneId) {
        /// <signature>
        /// <summary>
        /// Expands the event for a specific period based on the recurrenceRule option.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the occurrence period.</param>
        /// <param name="end" type="Date" >The end date of the occurrence period.</param>
        /// <param name="timeZoneId" type="String" >The time zone ID used to convert the recurrence rule dates.</param>
        /// <returns type="Array">list of occurrences.</returns>
        /// </signature>
    },
    update: function(eventInfo) {
        /// <signature>
        /// <summary>
        /// Updates the scheduler event.
        /// </summary>
        /// <param name="eventInfo" type="Object" >The new values, which will be used to update the event.</param>
        /// </signature>
    },
    isMultiDay: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is equal to or longer then twenty four hours.
        /// </summary>
        /// <returns type="Boolean">return true if event is equal to or longer then 24 hours.</returns>
        /// </signature>
    },
    isException: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is a recurrence exception.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence exception.</returns>
        /// </signature>
    },
    isOccurrence: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is an occurrence part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is an occurrence.</returns>
        /// </signature>
    },
    isRecurring: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is part of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is recurring.</returns>
        /// </signature>
    },
    isRecurrenceHead: function() {
        /// <signature>
        /// <summary>
        /// Checks whether the event is the head of a recurring series.
        /// </summary>
        /// <returns type="Boolean">return true if event is a recurrence head.</returns>
        /// </signature>
    },
    toOccurrence: function(options) {
        /// <signature>
        /// <summary>
        /// Converts the scheduler event to a event occurrence. Method will remove recurrenceRule, recurrenceException options, will add a recurrenceId field and will set id to the default one.
        /// </summary>
        /// <param name="options" type="Object" >Additional options passed to the SchedulerEvent constructor.</param>
        /// <returns type="kendo.data.SchedulerEvent">the occurrence.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.dataviz.ui, {
    Barcode: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Barcode</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Barcode = (function() {
var original = kendo.dataviz.ui.Barcode;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the barcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the barcode.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the barcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the barcode.</returns>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the barcode.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="String">The value of the barcode.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoBarcode = function() {
    this.data("kendoBarcode", new kendo.dataviz.ui.Barcode());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoBarcode: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Barcode widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Barcode">The kendo.dataviz.ui.Barcode instance (if present).</returns>
        /// </signature>
    },
    kendoBarcode: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Barcode widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;renderAs — String (default: "canvas")
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;background — String (default: "white")
        /// &#10;The background of the barcode area.
/// &#10;Any valid CSS color string will work here, including hex and rgb.
        /// &#10;
        /// &#10;border — Object 
        /// &#10;The border of the barcode area.
        /// &#10;
        /// &#10;checksum — Boolean (default: false)
        /// &#10;If set to true the barcode will not display the checksum digit next to the value in the text area.
        /// &#10;
        /// &#10;color — String (default: "black")
        /// &#10;The color of the bar elements.
/// &#10;Any valid CSS color string will work here, including hex and rgb.
        /// &#10;
        /// &#10;height — Number (default: 100)
        /// &#10;The height of the barcode in pixels.  By default the height is 100.
        /// &#10;
        /// &#10;padding — Object 
        /// &#10;The padding of the barcode.
        /// &#10;
        /// &#10;text — Object 
        /// &#10;Can be set to a JavaScript object which represents the text configuration.
        /// &#10;
        /// &#10;type — String (default: "code39")
        /// &#10;The symbology (encoding) the barcode will use.The supported values are:
        /// &#10;
        /// &#10;value — String 
        /// &#10;The initial value of the Barcode
        /// &#10;
        /// &#10;width — Number (default: 300)
        /// &#10;The width of the barcode in pixels.  By default the width is 300.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    Chart: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Chart</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Chart = (function() {
var original = kendo.dataviz.ui.Chart;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoChart = function() {
    this.data("kendoChart", new kendo.dataviz.ui.Chart());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoChart: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Chart widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Chart">The kendo.dataviz.ui.Chart instance (if present).</returns>
        /// </signature>
    },
    kendoChart: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Chart widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;axisDefaults — Object 
        /// &#10;The default options for all chart axes. Accepts the options supported by categoryAxis, valueAxis, xAxis and yAxis.
        /// &#10;
        /// &#10;categoryAxis — Array|Object 
        /// &#10;The category axis configuration options.
        /// &#10;
        /// &#10;chartArea — Object 
        /// &#10;The chart area configuration options. Represents the entire visible area of the chart.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the chart which is used to display the series. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;legend — Object 
        /// &#10;The chart legend configuration options.
        /// &#10;
        /// &#10;panes — Array 
        /// &#10;The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
/// &#10;Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.
        /// &#10;
        /// &#10;plotArea — Object 
        /// &#10;The plot area configuration options. The plot area is the area which displays the series.
        /// &#10;
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;series — Array 
        /// &#10;The configuration of the chart series.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.
        /// &#10;
        /// &#10;seriesColors — Array 
        /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        /// &#10;
        /// &#10;seriesDefaults — Object 
        /// &#10;The default options for all series.
        /// &#10;
        /// &#10;theme — String 
        /// &#10;The chart theme.The supported values are:
        /// &#10;
        /// &#10;title — String 
        /// &#10;The chart title configuration options or text.
        /// &#10;
        /// &#10;title — Object 
        /// &#10;The chart title configuration options or text.
        /// &#10;
        /// &#10;tooltip — Object 
        /// &#10;The chart series tooltip configuration options.
        /// &#10;
        /// &#10;transitions — Boolean (default: true)
        /// &#10;If set to true the chart will play animations when displaying the series. By default animations are enabled.
        /// &#10;
        /// &#10;valueAxis — Array 
        /// &#10;The value axis configuration options.
        /// &#10;
        /// &#10;xAxis — Array 
        /// &#10;The X-axis configuration options of the scatter chart X-axis. Supports all valueAxis options.
        /// &#10;
        /// &#10;yAxis — Array 
        /// &#10;The y axis configuration options of the scatter chart. Supports all valueAxis options.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    Diagram: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Diagram</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Diagram = (function() {
var original = kendo.dataviz.ui.Diagram;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    zoom: function(zoom,staticPoint) {
        /// <signature>
        /// <summary>
        /// Zooms in or out of the diagram.
        /// </summary>
        /// <param name="zoom" type="Number" >The zoom factor.</param>
        /// <param name="staticPoint" type="Object" >The point to zoom into or out of.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the diagram.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    save: function() {
        /// <signature>
        /// <summary>
        /// Saves the diagram.
        /// </summary>
        /// </signature>
    },
    load: function(json) {
        /// <signature>
        /// <summary>
        /// Loads a saved diagram.
        /// </summary>
        /// <param name="json" type="String" >The serialized diagram in JSON format.</param>
        /// </signature>
    },
    pan: function(pan) {
        /// <signature>
        /// <summary>
        /// Pans the diagram with a specified delta (represented as a Point).
        /// </summary>
        /// <param name="pan" type="Object" >The translation delta to apply to the diagram.</param>
        /// </signature>
    },
    viewport: function() {
        /// <signature>
        /// <summary>
        /// The bounds of the diagramming canvas.
        /// </summary>
        /// </signature>
    },
    viewToDocument: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from View coordinates to Page document coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    documentToView: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Page document coordinates to View coordinates. View origin is the diagram container.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    viewToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from View coordinates to Model coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in View coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToView: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to View coordinates. Model coordinates are independent coordinates to define Shape bounds.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToLayer: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to Layer coordinates. Layer coordinates are relative to the drawing surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    layerToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Layer coordinates to Model coordinates. Layer coordinates are relative to the drawable surface.
        /// </summary>
        /// <param name="point" type="Object" >The point in layer coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    documentToModel: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Page document coordinates to Model coordinates. Shortcut for viewToModel(documentToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Page document coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    modelToDocument: function(point) {
        /// <signature>
        /// <summary>
        /// Transforms a point from Model coordinates to Page document coordinates. Shortcut for viewToDocument(modelToView(point))
        /// </summary>
        /// <param name="point" type="Object" >The point in Model coordinates.</param>
        /// <returns type="Object">the transformed point</returns>
        /// </signature>
    },
    transformPoint: function(p) {
        /// <signature>
        /// <summary>
        /// Transforms a point from the main canvas coordinates to the non-transformed origin.
        /// </summary>
        /// <param name="p" type="Object" >An arbitrary point to transform to the diagram coordinate system.</param>
        /// </signature>
    },
    transformRect: function(r) {
        /// <signature>
        /// <summary>
        /// Transforms a given rectangle to the diagram coordinate system.
        /// </summary>
        /// <param name="r" type="Object" >The rectangle to be transformed.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Sets the focus on the diagram.
        /// </summary>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Clears the content of the diagram.
        /// </summary>
        /// </signature>
    },
    connect: function(source,target,options) {
        /// <signature>
        /// <summary>
        /// Creates a connection which can be either attached on both ends to a shape, half attached or floating (not attached to any shape). When a connection is (half) attached to a shape it happens through the intermediate Connector object. Connectors are part of a Shape's definition and you can specify the binding of a connection to a shape directly via the shape or via one of its connectors. If you specify a Shape as a connection's endpoint the Auto-connector will be used. This means that the endpoint of the connection will switch to the most convenient (in the sense of shortest path) connector automatically. If you specify a shape's connector as an endpoint for a connection the endpoint will remain attached to that given Connector instance.
/// Finally, if you wish to have a (half) floating connection endpoint you should specify a Point as parameter for the floating end.
        /// </summary>
        /// <param name="source" type="Object" >The source definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="target" type="Object" >The target definition of the connection. This can be a Shape, a Connector or a Point.</param>
        /// <param name="options" type="Object" >The options of the new connection. See connections options.</param>
        /// </signature>
    },
    connected: function(source,target) {
        /// <signature>
        /// <summary>
        /// Returns whether the two given shapes are connected through a connection.
        /// </summary>
        /// <param name="source" type="Object" >A Shape in the diagram.</param>
        /// <param name="target" type="Object" >A Shape in the diagram.</param>
        /// </signature>
    },
    addConnection: function(connection,undoable) {
        /// <signature>
        /// <summary>
        /// Adds the given Connection to the diagram.
        /// </summary>
        /// <param name="connection" type="Object" >The Connection instance to be added to the diagram.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    addShape: function(obj,undoable) {
        /// <signature>
        /// <summary>
        /// Adds a new shape to the diagram.
        /// </summary>
        /// <param name="obj" type="Object" >A Shape instance or a Point where the default shape type will be added.</param>
        /// <param name="undoable" type="Boolean" >Whether the addition should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    undo: function() {
        /// <signature>
        /// <summary>
        /// Undoes the previous action.
        /// </summary>
        /// </signature>
    },
    redo: function() {
        /// <signature>
        /// <summary>
        /// Executes again the previously undone action.
        /// </summary>
        /// </signature>
    },
    remove: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Removes one or more items from the diagram
        /// </summary>
        /// <param name="items" type="Object" >A diagram item or an array of diagram items to remove.</param>
        /// <param name="undoable" type="Boolean" >Whether the removal should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    select: function(obj,options) {
        /// <signature>
        /// <summary>
        /// Gets the currently selected items is no parameter is specified. If a parameter is specified this selects items in the diagram on the basis of the given input.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" >Only one Boolean option is currently defined; addToSelection. If set to true the newly selected items will be added to the existing selection. Otherwise a new selection set is created. The default is false.</param>
        /// </signature>
    },
    toFront: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Brings the specified items in front, i.e. it's reordering items to ensure they are on top of the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    toBack: function(items,undoable) {
        /// <signature>
        /// <summary>
        /// Sends the specified items to the back, i.e. it's reordering items to ensure they are underneath the complementary items.
        /// </summary>
        /// <param name="items" type="Array" >An array of diagram items.</param>
        /// <param name="undoable" type="Boolean" >Whether the change should be recorded in the undo-redo stack.</param>
        /// </signature>
    },
    bringIntoView: function(obj,options) {
        /// <signature>
        /// <summary>
        /// Brings one or more items into the view in function of various criteria.
        /// </summary>
        /// <param name="obj" type="Object" ></param>
        /// <param name="options" type="Object" ></param>
        /// </signature>
    },
    boundingBox: function(items) {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items" type="Array" >The items (shapes and connections) to include in the bounding box. Defaults to all items if not specified.</param>
        /// <returns type="kendo.dataviz.diagram.Rect">The bounding rectangle of the specified items. If nothing is specified the bounding box of the all diagram will be returned.</returns>
        /// </signature>
    },
    copy: function() {
        /// <signature>
        /// <summary>
        /// Puts a copy of the currently selected diagram to an internal clipboard.
        /// </summary>
        /// </signature>
    },
    cut: function() {
        /// <signature>
        /// <summary>
        /// Cuts the currently selected diagram items to an internal clipboard.
        /// </summary>
        /// </signature>
    },
    paste: function() {
        /// <signature>
        /// <summary>
        /// Pastes the content of the internal diagram clipboard.
        /// </summary>
        /// </signature>
    },
    layout: function(options) {
        /// <signature>
        /// <summary>
        /// Applies a layout algorithm on the current diagram.A more detailed overview of layout and graph analysis can be found below.
        /// </summary>
        /// <param name="options" type="Object" >The layout options. See options.layout for a full reference.</param>
        /// </signature>
    },
    alignShapes: function(direction) {
        /// <signature>
        /// <summary>
        /// Aligns the edges (as defined by the bounding box) of the selected shapes.
        /// </summary>
        /// <param name="direction" type="String" >This can be one of the four supported directions:</param>
        /// </signature>
    },
    getShapeById: function(id) {
        /// <signature>
        /// <summary>
        /// Returns the shape or connection with the specified identifier.
        /// </summary>
        /// <param name="id" type="String" >The unique identifier of the Shape or Connection</param>
        /// <returns type="Object">the item that has the provided ID.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDiagram = function() {
    this.data("kendoDiagram", new kendo.dataviz.ui.Diagram());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDiagram: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Diagram widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Diagram">The kendo.dataviz.ui.Diagram instance (if present).</returns>
        /// </signature>
    },
    kendoDiagram: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Diagram widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;zoomRate — Number (default: 1.1)
        /// &#10;The scaling factor or the zoom when using the mouse-wheel to zoom in or out.
/// &#10;If zoomRate is less than 1, zooming will be reversed.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;See the dataSource field.
        /// &#10;
        /// &#10;draggable — Boolean (default: true)
        /// &#10;Defines whether items can be dropped on the diagram.
        /// &#10;
        /// &#10;layout — Object 
        /// &#10;The layout of a diagram consists in arranging the shapes (sometimes also the connections) in some fashion in order to achieve an aesthetically pleasing experience to the user. It aims at giving a more direct insight in the information contained within the diagram and its relational structure.On a technical level, layout consists of a multitude of algorithms and optimizations:and various ad-hoc calculations which depend on the type of layout. The criteria on which an algorithm is based vary but the common denominator is:Kendo diagram includes three of the most used layout algorithms which should cover most of your layout needs - tree layout, force-directed layout and layered layout. Please, check the type property for more details regarding each type.The generic way to apply a layout is by calling the layout() method on the diagram. The method has a single parameter options. It is an object, which can contain parameters which are specific to the layout as well as parameters customizing the global grid layout. Parameters which apply to other layout algorithms can be included but are overlooked if not applicable to the chose layout type. This means that you can define a set of parameters which cover all possible layout types and simply pass it in the method whatever the layout define in the first parameter.
        /// &#10;
        /// &#10;template — String|Function (default: "")
        /// &#10;The template which renders the content of the shape when bound to a dataSource. The names you can use in the template correspond to the properties used in the dataSource. See the dataSource topic below for a concrete example.
        /// &#10;
        /// &#10;resizable — Boolean (default: true)
        /// &#10;This defines whether the shapes can be resized. If set to false the adorner will not show the resizing thumbs, as can be seen below;
        /// &#10;
        /// &#10;rotatable — Boolean (default: true)
        /// &#10;This defines whether the shapes can be rotated. If set to false the adorner will not show the rotating thumb, as can be seen below;
        /// &#10;
        /// &#10;connectionDefaults — Object 
        /// &#10;Defines the connections configuration.
        /// &#10;
        /// &#10;connections — Array 
        /// &#10;Defines the connections configuration.
        /// &#10;
        /// &#10;shapeDefaults — Object 
        /// &#10;Defines the shape options.
        /// &#10;
        /// &#10;shapes — Array 
        /// &#10;Defines the shape options.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    LinearGauge: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.LinearGauge</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.LinearGauge = (function() {
var original = kendo.dataviz.ui.LinearGauge;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the gauge.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    value: function() {
        /// <signature>
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoLinearGauge = function() {
    this.data("kendoLinearGauge", new kendo.dataviz.ui.LinearGauge());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoLinearGauge: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.LinearGauge widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.LinearGauge">The kendo.dataviz.ui.LinearGauge instance (if present).</returns>
        /// </signature>
    },
    kendoLinearGauge: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.LinearGauge widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;gaugeArea — Object 
        /// &#10;The gauge area configuration options.
/// &#10;This is the entire visible area of the gauge.
        /// &#10;
        /// &#10;pointer — Object 
        /// &#10;The pointer configuration options.
        /// &#10;
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;scale — Object 
        /// &#10;Configures the scale.
        /// &#10;
        /// &#10;transitions — Boolean (default: true)
        /// &#10;A value indicating if transition animations should be played.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    Map: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Map</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Map = (function() {
var original = kendo.dataviz.ui.Map;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    center: function(center) {
        /// <signature>
        /// <summary>
        /// Gets or sets the map center.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="center" type="Object" >The location of the new map center. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.map.Location">The current map center.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    eventOffset: function(e) {
        /// <signature>
        /// <summary>
        /// Returns the event coordinates relative to the map element.
/// Offset coordinates are not synchronized to a particular location on the map.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The event coordinates relative to the map element.</returns>
        /// </signature>
    },
    eventToLayer: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves projected (layer) coordinates that correspond to this mouse event.
/// Layer coordinates are absolute and change only when the zoom level is changed.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The projected (layer) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToLocation: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves the geographic location that correspond to this mouse event.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The geographic location that correspond to this mouse event.</returns>
        /// </signature>
    },
    eventToView: function(e) {
        /// <signature>
        /// <summary>
        /// Retrieves relative (view) coordinates that correspond to this mouse event.
/// Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        /// </summary>
        /// <param name="e" type="Object" >The DOM or jQuery mouse event.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The relative (view) coordinates that correspond to this mouse event.</returns>
        /// </signature>
    },
    extent: function() {
        /// <signature>
        /// <summary>
        /// Gets the map current map extent.
        /// </summary>
        /// <returns type="kendo.dataviz.map.Extent">The current map extent.</returns>
        /// </signature>
    },
    layerToLocation: function(point,zoom) {
        /// <signature>
        /// <summary>
        /// Transforms layer (projected) coordinates to geographical location.
        /// </summary>
        /// <param name="point" type="Object" >The layer (projected) coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the layer coordinates.</returns>
        /// </signature>
    },
    locationToLayer: function(location,zoom) {
        /// <signature>
        /// <summary>
        /// Returns the layer (projected) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The layer (projected) coordinates.</returns>
        /// </signature>
    },
    locationToView: function(location) {
        /// <signature>
        /// <summary>
        /// Returns the view (relative) coordinates that correspond to a geographical location.
        /// </summary>
        /// <param name="location" type="Object" >The geographic location. An array argument is assumed to be in [Latitude, Lonigude] order.</param>
        /// <returns type="kendo.dataviz.geometry.Point">The view coordinates that correspond to a geographical location.</returns>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Resets the map and applies new options over the current state.
        /// </summary>
        /// <param name="options" type="Object" >The new options to be applied.</param>
        /// </signature>
    },
    viewSize: function() {
        /// <signature>
        /// <summary>
        /// Retrieves the size of the visible portion of the map.
        /// </summary>
        /// <returns type="Object">The size (width and height) of the visible portion of the map.</returns>
        /// </signature>
    },
    viewToLocation: function(point,zoom) {
        /// <signature>
        /// <summary>
        /// Returns the geographical location that correspond to the view (relative) coordinates.
        /// </summary>
        /// <param name="point" type="Object" >The view coordinates. An array argument is assumed to be in x, y order.</param>
        /// <param name="zoom" type="Number" >Optional. Assumed zoom level. Defaults to the current zoom level.</param>
        /// <returns type="kendo.dataviz.map.Location">The geographic location that corresponds to the view coordinates.</returns>
        /// </signature>
    },
    zoom: function(level) {
        /// <signature>
        /// <summary>
        /// Gets or sets the map zoom level.
/// The setter is chainable, i.e. returns the map instance.
        /// </summary>
        /// <param name="level" type="Number" >The new zoom level. The value is clamped to the  [minZoom, maxZoom] interval.</param>
        /// <returns type="Number">The current zoom level.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMap = function() {
    this.data("kendoMap", new kendo.dataviz.ui.Map());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMap: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Map widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Map">The kendo.dataviz.ui.Map instance (if present).</returns>
        /// </signature>
    },
    kendoMap: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Map widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;center — Array 
        /// &#10;The map center. Coordinates are listed as [Latitude, Longitude].
        /// &#10;
        /// &#10;controls — Object 
        /// &#10;The configuration of built-in map controls.
        /// &#10;
        /// &#10;layerDefaults — Object 
        /// &#10;The default configuration for map layers by type.
        /// &#10;
        /// &#10;layers — Array 
        /// &#10;The configuration of the map layers.
/// &#10;The layer type is determined by the value of the type field.
        /// &#10;
        /// &#10;markerDefaults — Object 
        /// &#10;The default options for all markers.
        /// &#10;
        /// &#10;markers — Array 
        /// &#10;Static markers to display on the map.
        /// &#10;
        /// &#10;minZoom — Number (default: 1)
        /// &#10;The minimum zoom level.
/// &#10;Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
        /// &#10;
        /// &#10;maxZoom — Number (default: 19)
        /// &#10;The maximum zoom level.
/// &#10;Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
        /// &#10;
        /// &#10;minSize — Number (default: 256)
        /// &#10;The size of the map in pixels at zoom level 0.
        /// &#10;
        /// &#10;pannable — Boolean (default: true)
        /// &#10;Controls whether the user can pan the map.
        /// &#10;
        /// &#10;wraparound — Boolean (default: true)
        /// &#10;Specifies whether the map should wrap around the east-west edges.
        /// &#10;
        /// &#10;zoom — Number (default: 3)
        /// &#10;The initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize
        /// &#10;
        /// &#10;zoomable — Boolean (default: true)
        /// &#10;Controls whether the map zoom level can be changed by the user.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    QRCode: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.QRCode</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.QRCode = (function() {
var original = kendo.dataviz.ui.QRCode;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the QRCode for safe removal from the DOM.Removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the qrcode encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the QR code using the current value and options.
        /// </summary>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets new options to the QRCode and redraws it.
        /// </summary>
        /// <param name="options" type="Object" >An object with the new options. All configuration options can be set.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the qrcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
/// ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the qrcode.</returns>
        /// </signature>
    },
    value: function(options) {
        /// <signature>
        /// <summary>
        /// Change the value of the QR code.
        /// </summary>
        /// <param name="options" type="Object" >The new value to be set.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoQRCode = function() {
    this.data("kendoQRCode", new kendo.dataviz.ui.QRCode());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoQRCode: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.QRCode widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.QRCode">The kendo.dataviz.ui.QRCode instance (if present).</returns>
        /// </signature>
    },
    kendoQRCode: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.QRCode widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;background — String (default: "#fff")
        /// &#10;The background color of the QR code. Accepts a valid CSS color string, including hex and rgb.
        /// &#10;
        /// &#10;border — Object 
        /// &#10;The border of the QR code.
        /// &#10;
        /// &#10;color — String (default: "#000")
        /// &#10;The color of the QR code. Accepts a valid CSS color string, including hex and rgb.
        /// &#10;
        /// &#10;encoding — String (default: "ISO_8859_1")
        /// &#10;The encoding mode used to encode the value.The possible values are:
        /// &#10;
        /// &#10;errorCorrection — String (default: "L")
        /// &#10;The error correction level used to encode the value.The possible values are:
        /// &#10;
        /// &#10;padding — Number (default: 0)
        /// &#10;Sets the minimum distance in pixels that should be left between the border and the QR modules.
        /// &#10;
        /// &#10;renderAs — String (default: "canvas")
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;size — Number|String 
        /// &#10;Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels. If no size is specified, it will be determined from the element width and height. In case the element does not have width or height bigger than zero, a default value of 200 pixels will be used.
        /// &#10;
        /// &#10;value — Number|String 
        /// &#10;The value of the QRCode.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    RadialGauge: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.RadialGauge</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.RadialGauge = (function() {
var original = kendo.dataviz.ui.RadialGauge;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Redraws the gauge.
        /// </summary>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the gauge.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the gauge encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },
    value: function() {
        /// <signature>
        /// <summary>
        /// Change the value of the gauge.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoRadialGauge = function() {
    this.data("kendoRadialGauge", new kendo.dataviz.ui.RadialGauge());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoRadialGauge: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.RadialGauge widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.RadialGauge">The kendo.dataviz.ui.RadialGauge instance (if present).</returns>
        /// </signature>
    },
    kendoRadialGauge: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.RadialGauge widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;gaugeArea — Object 
        /// &#10;The gauge area configuration options.
/// &#10;This is the entire visible area of the gauge.
        /// &#10;
        /// &#10;pointer — Object 
        /// &#10;The pointer configuration options.
        /// &#10;
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;scale — Object 
        /// &#10;Configures the scale.
        /// &#10;
        /// &#10;transitions — Boolean (default: true)
        /// &#10;A value indicating if transition animations should be played.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    Sparkline: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.Sparkline</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.Sparkline = (function() {
var original = kendo.dataviz.ui.Sparkline;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Sparkline for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and repaints the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing Chart and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Sets the widget options. Changes are cumulative.
        /// </summary>
        /// <param name="options" type="Object" >The chart settings to update.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the sparkline.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the sparkline encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoSparkline = function() {
    this.data("kendoSparkline", new kendo.dataviz.ui.Sparkline());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSparkline: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.Sparkline widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.Sparkline">The kendo.dataviz.ui.Sparkline instance (if present).</returns>
        /// </signature>
    },
    kendoSparkline: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.Sparkline widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;axisDefaults — Object 
        /// &#10;Default options for all chart axes.
        /// &#10;
        /// &#10;categoryAxis — Array 
        /// &#10;The category axis configuration options.
        /// &#10;
        /// &#10;chartArea — Object 
        /// &#10;The chart area configuration options.
/// &#10;This is the entire visible area of the chart.
        /// &#10;
        /// &#10;data — Array 
        /// &#10;The data for the default sparkline series.Will be discareded if series are supplied.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;DataSource configuration or instance.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Indicates whether the chart will call read on the data source initially.
        /// &#10;
        /// &#10;plotArea — Object 
        /// &#10;The plot area configuration options. This is the area containing the plotted series.
        /// &#10;
        /// &#10;pointWidth — Number (default: 5)
        /// &#10;The width to allocate for each data point.
        /// &#10;
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Sparkline will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;series — Array 
        /// &#10;Array of series definitions.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.
        /// &#10;
        /// &#10;seriesColors — Array 
        /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        /// &#10;
        /// &#10;seriesDefaults — Object 
        /// &#10;Default values for each series.
        /// &#10;
        /// &#10;theme — String 
        /// &#10;Sets Chart theme. Available themes: default, blueOpal, black.
        /// &#10;
        /// &#10;tooltip — Object 
        /// &#10;The data point tooltip configuration options.
        /// &#10;
        /// &#10;transitions — Boolean (default: false)
        /// &#10;A value indicating if transition animations should be played.
        /// &#10;
        /// &#10;type — String (default: "line")
        /// &#10;The default series type.
        /// &#10;
        /// &#10;valueAxis — Array 
        /// &#10;The value axis configuration options.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.dataviz.ui, {
    StockChart: function() {
        /// <signature>
        /// <summary>Constructor of kendo.dataviz.ui.StockChart</summary>
        /// </signature>
    }
});

kendo.dataviz.ui.StockChart = (function() {
var original = kendo.dataviz.ui.StockChart;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    redraw: function() {
        /// <signature>
        /// <summary>
        /// Repaints the chart using the currently loaded data.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and renders the chart.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    svg: function() {
        /// <signature>
        /// <summary>
        /// Returns the SVG representation of the chart.
/// The returned string is a self-contained SVG document that can be used as is or
/// converted to other formats using tools like Inkscape and
/// ImageMagick.
/// Both programs provide command-line interface suitable for server-side processing.
        /// </summary>
        /// <returns type="String">the SVG representation of the chart.</returns>
        /// </signature>
    },
    imageDataURL: function() {
        /// <signature>
        /// <summary>
        /// Returns a PNG image of the chart encoded as a Data URL.
        /// </summary>
        /// <returns type="String">A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoStockChart = function() {
    this.data("kendoStockChart", new kendo.dataviz.ui.StockChart());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoStockChart: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.dataviz.ui.StockChart widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.dataviz.ui.StockChart">The kendo.dataviz.ui.StockChart instance (if present).</returns>
        /// </signature>
    },
    kendoStockChart: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.dataviz.ui.StockChart widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;dateField — String (default: "date")
        /// &#10;The field containing the point date.
/// &#10;It is used as a default categoryField for all series.The data item field value must be either:
        /// &#10;
        /// &#10;navigator — Object 
        /// &#10;The data navigator configuration options.
        /// &#10;
        /// &#10;axisDefaults — Object 
        /// &#10;Default options for all chart axes.
        /// &#10;
        /// &#10;categoryAxis — Array 
        /// &#10;The category axis configuration options.
        /// &#10;
        /// &#10;chartArea — Object 
        /// &#10;The chart area configuration options.
/// &#10;This is the entire visible area of the chart.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;DataSource configuration or instance.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Indicates whether the chart will call read on the data source initially.
        /// &#10;
        /// &#10;legend — Object 
        /// &#10;The chart legend configuration options.
        /// &#10;
        /// &#10;panes — Array 
        /// &#10;The chart panes configuration.Panes are used to split the chart in two or more parts. The panes are ordered from top to bottom.Each axis can be associated with a pane by setting its pane option to the name of the desired pane.
/// &#10;Axis that don't have specified pane are placed in the top (default) pane.Series are moved to the desired pane by associating them with an axis.
        /// &#10;
        /// &#10;plotArea — Object 
        /// &#10;The plot area configuration options. This is the area containing the plotted series.
        /// &#10;
        /// &#10;renderAs — String 
        /// &#10;Sets the preferred rendering engine.
/// &#10;If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
        /// &#10;
        /// &#10;series — Array 
        /// &#10;Array of series definitions.The series type is determined by the value of the type field.
/// &#10;If a type value is missing, the type is assumed to be the one specified in seriesDefaults.Each series type has a different set of options.
        /// &#10;
        /// &#10;seriesColors — Array 
        /// &#10;The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        /// &#10;
        /// &#10;seriesDefaults — Object 
        /// &#10;Default values for each series.
        /// &#10;
        /// &#10;theme — String 
        /// &#10;Sets Chart theme. Available themes: default, blueOpal, black.
        /// &#10;
        /// &#10;title — Object 
        /// &#10;The chart title configuration options or text.
        /// &#10;
        /// &#10;tooltip — Object 
        /// &#10;The data point tooltip configuration options.
        /// &#10;
        /// &#10;transitions — Boolean (default: true)
        /// &#10;A value indicating if transition animations should be played.
        /// &#10;
        /// &#10;valueAxis — Array 
        /// &#10;The value axis configuration options.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile, {
    Application: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.Application</summary>
        /// </signature>
    }
});

kendo.mobile.Application = (function() {
var original = kendo.mobile.Application;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    changeLoadingMessage: function(text) {
        /// <signature>
        /// <summary>
        /// Changes the loading message.
        /// </summary>
        /// <param name="text" type="String" >New text of the loading animation.</param>
        /// </signature>
    },
    hideLoading: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    navigate: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >Optional. The transition to apply when navigating. See View Transitions section for more information.</param>
        /// </signature>
    },
    replace: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view. The view will replace the current one in the history stack.
        /// </summary>
        /// <param name="url" type="String" >The id or url of the view.</param>
        /// <param name="transition" type="String" >Optional. The transition to apply when navigating. See View Transitions section for more information.</param>
        /// </signature>
    },
    scroller: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view's scroller widget instance.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">the scroller widget instance.</returns>
        /// </signature>
    },
    showLoading: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
        /// </summary>
        /// </signature>
    },
    skin: function(skin) {
        /// <signature>
        /// <summary>
        /// Change the current skin of the mobile application. When used without parameters, returns the currently used skin. Available as of Q2 2013.
        /// </summary>
        /// <param name="skin" type="String" >The skin name to switch to or empty string ("") to return to native.</param>
        /// <returns type="String">Current skin in effect.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


intellisense.annotate(kendo.mobile.ui, {
    ActionSheet: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ActionSheet</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ActionSheet = (function() {
var original = kendo.mobile.ui.ActionSheet;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the ActionSheet.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ActionSheet for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target,context) {
        /// <signature>
        /// <summary>
        /// Open the ActionSheet.
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target element of the ActionSheet, available in the callback methods.Notice The target element is mandatory on tablets, as the ActionSheet widget positions itself relative to opening element when a tablet is detected.</param>
        /// <param name="context" type="Object" >(optional) The context of the ActionSheet, available in the callback methods.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileActionSheet = function() {
    this.data("kendoMobileActionSheet", new kendo.mobile.ui.ActionSheet());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileActionSheet: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ActionSheet widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ActionSheet">The kendo.mobile.ui.ActionSheet instance (if present).</returns>
        /// </signature>
    },
    kendoMobileActionSheet: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ActionSheet widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;cancel — String (default: "Cancel")
        /// &#10;The text of the cancel button.
        /// &#10;
        /// &#10;popup — Object 
        /// &#10;The popup configuration options (tablet only).
        /// &#10;
        /// &#10;type — String (default: auto)
        /// &#10;By default, the actionsheet opens as a full screen dialog on a phone device or as a popover if a tablet is detected. Setting the type to "phone" or "tablet" will force the looks of the widget regardless of the device.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    BackButton: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.BackButton</summary>
        /// </signature>
    }
});

kendo.mobile.ui.BackButton = (function() {
var original = kendo.mobile.ui.BackButton;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the BackButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileBackButton = function() {
    this.data("kendoMobileBackButton", new kendo.mobile.ui.BackButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileBackButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.BackButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.BackButton">The kendo.mobile.ui.BackButton instance (if present).</returns>
        /// </signature>
    },
    kendoMobileBackButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.BackButton widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Button: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Button</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Button = (function() {
var original = kendo.mobile.ui.Button;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    badge: function(value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on the Button with the specified value. If invoked without parameters, returns the current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String | kendo.mobile.ui.Button">the badge value if invoked without parameters, otherwise the Button object.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Button for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Changes the enabled state of the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether to enable or disable the widget.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileButton = function() {
    this.data("kendoMobileButton", new kendo.mobile.ui.Button());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Button widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Button">The kendo.mobile.ui.Button instance (if present).</returns>
        /// </signature>
    },
    kendoMobileButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Button widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;badge — String 
        /// &#10;The badge of the button.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow the user to click it. The widget is enabled by default.
        /// &#10;
        /// &#10;icon — String 
        /// &#10;The icon of the button. It can be either one of the built-in icons, or a custom one.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ButtonGroup: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ButtonGroup</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ButtonGroup = (function() {
var original = kendo.mobile.ui.ButtonGroup;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    badge: function(button,value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="button" type="Object" >The target button specified either as a jQuery selector/object or as an button index.</param>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String|kendo.mobile.ui.Button">the badge value if invoked without parameters, otherwise the ButtonGroup object.</returns>
        /// </signature>
    },
    current: function() {
        /// <signature>
        /// <summary>
        /// Get the currently selected Button.
        /// </summary>
        /// <returns type="jQuery">the jQuery object representing the currently selected button.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ButtonGroup for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Select a Button.
        /// </summary>
        /// <param name="li" type="Object" >LI element or index of the Button.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileButtonGroup = function() {
    this.data("kendoMobileButtonGroup", new kendo.mobile.ui.ButtonGroup());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileButtonGroup: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ButtonGroup widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ButtonGroup">The kendo.mobile.ui.ButtonGroup instance (if present).</returns>
        /// </signature>
    },
    kendoMobileButtonGroup: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ButtonGroup widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;index — Number 
        /// &#10;Defines the initially selected Button (zero based index).
        /// &#10;
        /// &#10;selectOn — String (default: default "down")
        /// &#10;Sets the DOM event used to select the button. Accepts "up" as an alias for touchend, mouseup and MSPointerUp vendor specific events.By default, buttons are selected immediately after the user presses the button (on touchstart or mousedown or MSPointerDown, depending on the mobile device).
/// &#10;However, if the widget is placed in a scrollable view, the user may accidentally press the button when scrolling. In such cases, it is recommended to set this option to "up".
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    DetailButton: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.DetailButton</summary>
        /// </signature>
    }
});

kendo.mobile.ui.DetailButton = (function() {
var original = kendo.mobile.ui.DetailButton;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DetailButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileDetailButton = function() {
    this.data("kendoMobileDetailButton", new kendo.mobile.ui.DetailButton());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileDetailButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.DetailButton widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.DetailButton">The kendo.mobile.ui.DetailButton instance (if present).</returns>
        /// </signature>
    },
    kendoMobileDetailButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.DetailButton widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Drawer: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Drawer</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Drawer = (function() {
var original = kendo.mobile.ui.Drawer;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Drawer for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hide the Drawer
        /// </summary>
        /// </signature>
    },
    show: function() {
        /// <signature>
        /// <summary>
        /// Show the Drawer
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileDrawer = function() {
    this.data("kendoMobileDrawer", new kendo.mobile.ui.Drawer());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileDrawer: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Drawer widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Drawer">The kendo.mobile.ui.Drawer instance (if present).</returns>
        /// </signature>
    },
    kendoMobileDrawer: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Drawer widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;position — String (default: 'left')
        /// &#10;The position of the drawer. Can be left (default) or right.
        /// &#10;
        /// &#10;swipeToOpen — Boolean (default: true)
        /// &#10;If set to false, swiping the view will not activate the drawer. In this case, the drawer will only be open by a designated button
        /// &#10;
        /// &#10;title — String 
        /// &#10;The text to display in the Navbar title (if present).
        /// &#10;
        /// &#10;views — Array 
        /// &#10;A list of the view ids on which the drawer will appear. If omitted, the drawer will work on any view in the application.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Layout: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Layout</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Layout = (function() {
var original = kendo.mobile.ui.Layout;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileLayout = function() {
    this.data("kendoMobileLayout", new kendo.mobile.ui.Layout());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileLayout: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Layout widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Layout">The kendo.mobile.ui.Layout instance (if present).</returns>
        /// </signature>
    },
    kendoMobileLayout: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Layout widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;id — String (default: null)
        /// &#10;The id of the layout. Required
        /// &#10;
        /// &#10;platform — String 
        /// &#10;The specific platform this layout targets. By default, layouts are displayed
/// &#10;on all platforms.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ListView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ListView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ListView = (function() {
var original = kendo.mobile.ui.ListView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Appends new items generated by rendering the given data items with the listview template to the bottom of the listview.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    prepend: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Prepends new items generated by rendering the given data items with the listview template to the top of the listview.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    replace: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Replaces the contents of the listview with the passed rendered data items.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    remove: function(dataItems) {
        /// <signature>
        /// <summary>
        /// Removes the listview items which are rendered with the passed data items.
        /// </summary>
        /// <param name="dataItems" type="Array" ></param>
        /// </signature>
    },
    setDataItem: function(item,dataItem) {
        /// <signature>
        /// <summary>
        /// Re-renders the given listview item with the new dataItem provided. In order for the method to work as expected, the data items should be of type kendo.data.Model.
        /// </summary>
        /// <param name="item" type="jQuery" >The listview item to update</param>
        /// <param name="dataItem" type="kendo.data.Model" >The new dataItem</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    items: function() {
        /// <signature>
        /// <summary>
        /// Get the listview DOM element items
        /// </summary>
        /// <returns type="jQuery">The listview DOM element items</returns>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Repaints the listview (works only in databound mode).
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the DataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileListView = function() {
    this.data("kendoMobileListView", new kendo.mobile.ui.ListView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileListView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ListView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ListView">The kendo.mobile.ui.ListView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileListView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ListView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;appendOnRefresh — Boolean (default: false)
        /// &#10;Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refreshing. Notice: not applicable if ListView is in a virtual mode.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Indicates whether the listview will call read on the DataSource initially. If set to false, the listview will be bound after the DataSource instance fetch method is called.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;Instance of DataSource or the data that the mobile ListView will be bound to.
        /// &#10;
        /// &#10;endlessScroll — Boolean (default: false)
        /// &#10;If set to true, the listview gets the next page of data when the user scrolls near the bottom of the view.
        /// &#10;
        /// &#10;fixedHeaders — Boolean (default: false)
        /// &#10;If set to true, the group headers will persist their position when the user scrolls through the listview.
/// &#10;Applicable only when the type is set to group, or when binding to grouped DataSource.Notice: fixed headers are not supported in virtual mode.
        /// &#10;
        /// &#10;headerTemplate — String|Function (default: "#:value#")
        /// &#10;The header item template (applicable when the type is set to group).
        /// &#10;
        /// &#10;loadMore — Boolean (default: false)
        /// &#10;If set to true, a button is rendered at the bottom of the listview. Tapping it fetches and displays the items from the next page of the DataSource.
        /// &#10;
        /// &#10;loadMoreText — String (default: "Press to load more")
        /// &#10;The text of the rendered load-more button (applies only if loadMore is set to true).
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the listview will reload its data when the user pulls the view over the top limit.
        /// &#10;
        /// &#10;pullParameters — Function 
        /// &#10;A callback function used when the 'pullToRefresh' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.Notice: When the listview is in a virtual mode, the pull to refresh action removes the previously loaded items in the listview (instead of appending new records at the top).
/// &#10;Previously loaded pages in the DataSource are also discarded.
        /// &#10;
        /// &#10;style — String (default: "")
        /// &#10;The style of the widget. Can be either empty string(""), or inset.
        /// &#10;
        /// &#10;template — String|Function (default: "#:data#")
        /// &#10;The item template.
        /// &#10;
        /// &#10;type — String (default: "flat")
        /// &#10;The type of the control. Can be either flat (default) or group. Determined automatically in databound mode.
        /// &#10;
        /// &#10;filterable — Boolean (default: false)
        /// &#10;Indicates whether the filter input must be visible or not.
        /// &#10;
        /// &#10;filterable — Object 
        /// &#10;Indicates whether the filter input must be visible or not.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Loader: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Loader</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Loader = (function() {
var original = kendo.mobile.ui.Loader;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    show: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileLoader = function() {
    this.data("kendoMobileLoader", new kendo.mobile.ui.Loader());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileLoader: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Loader widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Loader">The kendo.mobile.ui.Loader instance (if present).</returns>
        /// </signature>
    },
    kendoMobileLoader: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Loader widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ModalView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ModalView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ModalView = (function() {
var original = kendo.mobile.ui.ModalView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the ModalView
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ModalView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target) {
        /// <signature>
        /// <summary>
        /// Open the ModalView
        /// </summary>
        /// <param name="target" type="jQuery" >(optional) The target of the ModalView</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileModalView = function() {
    this.data("kendoMobileModalView", new kendo.mobile.ui.ModalView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileModalView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ModalView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ModalView">The kendo.mobile.ui.ModalView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileModalView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ModalView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;height — Number 
        /// &#10;The height of the ModalView container in pixels. If not set, the element style is used.
        /// &#10;
        /// &#10;modal — Boolean (default: true)
        /// &#10;When set to false, the ModalView will close when the user taps outside of its element.
        /// &#10;
        /// &#10;width — Number 
        /// &#10;The width of the ModalView container in pixels. If not set, the element style is used.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    NavBar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.NavBar</summary>
        /// </signature>
    }
});

kendo.mobile.ui.NavBar = (function() {
var original = kendo.mobile.ui.NavBar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the NavBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    title: function(value) {
        /// <signature>
        /// <summary>
        /// Update the title element text. The title element is specified by setting the role data attribute to view-title.
        /// </summary>
        /// <param name="value" type="String" >The text of title</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileNavBar = function() {
    this.data("kendoMobileNavBar", new kendo.mobile.ui.NavBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileNavBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.NavBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.NavBar">The kendo.mobile.ui.NavBar instance (if present).</returns>
        /// </signature>
    },
    kendoMobileNavBar: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.NavBar widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Pane: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Pane</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Pane = (function() {
var original = kendo.mobile.ui.Pane;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Pane for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    hideLoading: function() {
        /// <signature>
        /// <summary>
        /// Hide the loading animation.
        /// </summary>
        /// </signature>
    },
    navigate: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate the local or remote view.
        /// </summary>
        /// <param name="url" type="String" >The id or URL of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions for more information.</param>
        /// </signature>
    },
    replace: function(url,transition) {
        /// <signature>
        /// <summary>
        /// Navigate to local or to remote view. The view will replace the current one in the history stack.
        /// </summary>
        /// <param name="url" type="String" >The id or URL of the view.</param>
        /// <param name="transition" type="String" >The transition to apply when navigating. See View Transitions for more information.</param>
        /// </signature>
    },
    Example: function() {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// </signature>
    },
    showLoading: function() {
        /// <signature>
        /// <summary>
        /// Show the loading animation.
        /// </summary>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Get a reference to the current view.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">the view instance.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobilePane = function() {
    this.data("kendoMobilePane", new kendo.mobile.ui.Pane());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobilePane: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Pane widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Pane">The kendo.mobile.ui.Pane instance (if present).</returns>
        /// </signature>
    },
    kendoMobilePane: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Pane widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;collapsible — Boolean (default: false)
        /// &#10;Applicable when the pane is inside a SplitView. If set to true, the pane will be hidden when the device is in portrait position. The expandPanes SplitView method displays the hidden panes.The id of the initial mobile View to display.
        /// &#10;
        /// &#10;initial — String 
        /// &#10;The id of the initial mobile View to display.
        /// &#10;
        /// &#10;layout — String 
        /// &#10;The id of the default Pane Layout.
        /// &#10;
        /// &#10;loading — String (default: "Loading...")
        /// &#10;The text displayed in the loading popup. Setting this value to false will disable the loading popup.
        /// &#10;
        /// &#10;portraitWidth — Number 
        /// &#10;Sets the pane width in pixels when the device is in portrait position.
        /// &#10;
        /// &#10;transition — String 
        /// &#10;The default View transition.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    PopOver: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.PopOver</summary>
        /// </signature>
    }
});

kendo.mobile.ui.PopOver = (function() {
var original = kendo.mobile.ui.PopOver;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Close the popover.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the PopOver for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    open: function(target) {
        /// <signature>
        /// <summary>
        /// Open the PopOver.
        /// </summary>
        /// <param name="target" type="jQuery" >The target of the Popover, to which the visual arrow will point to. This parameter is required for a tablet OS.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobilePopOver = function() {
    this.data("kendoMobilePopOver", new kendo.mobile.ui.PopOver());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobilePopOver: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.PopOver widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.PopOver">The kendo.mobile.ui.PopOver instance (if present).</returns>
        /// </signature>
    },
    kendoMobilePopOver: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.PopOver widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;pane — Object 
        /// &#10;The pane configuration options.
        /// &#10;
        /// &#10;popup — Object 
        /// &#10;The popup configuration options.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    ScrollView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.ScrollView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.ScrollView = (function() {
var original = kendo.mobile.ui.ScrollView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    content: function(content) {
        /// <signature>
        /// <summary>
        /// Update the ScrollView HTML content.
        /// </summary>
        /// <param name="content" type="Object" >The new ScrollView content.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ScrollView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    next: function() {
        /// <signature>
        /// <summary>
        /// Switches to the next page with animation.
        /// </summary>
        /// </signature>
    },
    prev: function() {
        /// <signature>
        /// <summary>
        /// Switches to the previous page with animation.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Redraw the mobile ScrollView pager. Called automatically on device orientation change event.
        /// </summary>
        /// </signature>
    },
    scrollTo: function(page,instant) {
        /// <signature>
        /// <summary>
        /// Scroll to the given page. Pages are zero-based indexed.
        /// </summary>
        /// <param name="page" type="Number" >The page to scroll to.</param>
        /// <param name="instant" type="Boolean" >If set to true, the ScrollView will jump instantly to the given page without any animation effects.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the DataSource of an existing ScrollView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileScrollView = function() {
    this.data("kendoMobileScrollView", new kendo.mobile.ui.ScrollView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileScrollView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.ScrollView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.ScrollView">The kendo.mobile.ui.ScrollView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileScrollView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.ScrollView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the DataSource during initialization. In this case data binding will occur when the change event of the data source is fired. By default the widget will bind to the DataSource specified in the configuration.Applicable only in data bound mode.
        /// &#10;
        /// &#10;bounceVelocityThreshold — Number (default: 1.6)
        /// &#10;The velocity threshold after which a swipe will result in a bounce effect.
        /// &#10;
        /// &#10;contentHeight — Number|String (default: "auto")
        /// &#10;The height of the ScrollView content. Supports 100% if the ScrollView is embedded in a stretched view and the ScrollView element is an immediate child of the view element.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;Instance of DataSource that the mobile ScrollView will be bound to. If DataSource is set, the widget will operate in data bound mode.
        /// &#10;
        /// &#10;duration — Number (default: 400)
        /// &#10;The milliseconds that take the ScrollView to snap to the current page after released.
        /// &#10;
        /// &#10;emptyTemplate — String (default: "")
        /// &#10;The template which is used to render the pages without content. By default the ScrollView renders a blank page.Applicable only in data bound mode.
        /// &#10;
        /// &#10;enablePager — Boolean (default: true)
        /// &#10;If set to true the ScrollView will display a pager. By default pager is enabled.
        /// &#10;
        /// &#10;itemsPerPage — Number (default: 1)
        /// &#10;Determines how many data items will be passed to the page template.Applicable only in data bound mode.
        /// &#10;
        /// &#10;page — Number (default: 0)
        /// &#10;The initial page to display.
        /// &#10;
        /// &#10;pageSize — Number (default: 1)
        /// &#10;Multiplier applied to the snap amount of the ScrollView. By default, the widget scrolls to the next screen when swipe. If the pageSize property is set to 0.5, the ScrollView will scroll by half of the widget width.Not applicable in data bound mode.
        /// &#10;
        /// &#10;template — String (default: "#:data#")
        /// &#10;The template which is used to render the content of pages. By default the ScrollView renders a div element for every page.Applicable only in data bound mode.
        /// &#10;
        /// &#10;velocityThreshold — Number (default: 0.8)
        /// &#10;The velocity threshold after which a swipe will navigate to the next page (as opposed to snapping back to the current page).
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Scroller: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Scroller</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Scroller = (function() {
var original = kendo.mobile.ui.Scroller;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    animatedScrollTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Scrolls the scroll container to the specified location with animation. The arguments should be negative numbers.
        /// </summary>
        /// <param name="x" type="Number" >The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" >The vertical offset in pixels to scroll to.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Scroller for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    disable: function() {
        /// <signature>
        /// <summary>
        /// Disables the scrolling of the element.
        /// </summary>
        /// </signature>
    },
    enable: function() {
        /// <signature>
        /// <summary>
        /// Enables the scrolling of the element after it has been disabled by calling disable.
        /// </summary>
        /// </signature>
    },
    height: function() {
        /// <signature>
        /// <summary>
        /// Returns the viewport height of the scrollable element.
        /// </summary>
        /// <returns type="Number">the viewport height in pixels.</returns>
        /// </signature>
    },
    pullHandled: function() {
        /// <signature>
        /// <summary>
        /// Indicate that the pull event is handled (i.e. data from the server has been retrieved).
        /// </summary>
        /// </signature>
    },
    reset: function() {
        /// <signature>
        /// <summary>
        /// Scrolls the container to the top.
        /// </summary>
        /// </signature>
    },
    scrollHeight: function() {
        /// <signature>
        /// <summary>
        /// Returns the height in pixels of the scroller content.
        /// </summary>
        /// </signature>
    },
    scrollTo: function(x,y) {
        /// <signature>
        /// <summary>
        /// Scrolls the container to the specified location. The arguments should be negative numbers.
        /// </summary>
        /// <param name="x" type="Number" >The horizontal offset in pixels to scroll to.</param>
        /// <param name="y" type="Number" >The vertical offset in pixels to scroll to.</param>
        /// </signature>
    },
    scrollWidth: function() {
        /// <signature>
        /// <summary>
        /// Returns the width in pixels of the scroller content.
        /// </summary>
        /// </signature>
    },
    zoomOut: function() {
        /// <signature>
        /// <summary>
        /// Zooms the scroller out to the minimum zoom level possible.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileScroller = function() {
    this.data("kendoMobileScroller", new kendo.mobile.ui.Scroller());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileScroller: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Scroller widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Scroller">The kendo.mobile.ui.Scroller instance (if present).</returns>
        /// </signature>
    },
    kendoMobileScroller: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Scroller widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;zoom — Boolean (default: false)
        /// &#10;If set to true, the user can zoom in/out the contents of the widget using the pinch/zoom gesture.
        /// &#10;
        /// &#10;elastic — Boolean (default: true)
        /// &#10;Weather or not to allow out of bounds dragging and easing.
        /// &#10;
        /// &#10;pullOffset — Number (default: 140)
        /// &#10;The threshold below which a releasing the scroller will trigger the pull event.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;pullTemplate — String (default: "Pull to refresh")
        /// &#10;The message template displayed when the user pulls the scroller.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;pullToRefresh — Boolean (default: false)
        /// &#10;If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
/// &#10;If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
        /// &#10;
        /// &#10;refreshTemplate — String (default: "Refreshing")
        /// &#10;The message template displayed during the refresh.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;releaseTemplate — String (default: "Release to refresh")
        /// &#10;The message template displayed when the user pulls the scroller below the pullOffset, indicating that pullToRefresh will occur.
/// &#10;Has effect only when the pullToRefresh option is set to true.
        /// &#10;
        /// &#10;useNative — Boolean (default: false)
        /// &#10;If set to true, the scroller will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 4, Android > 2, WP8. BlackBerry devices do support it, but the native scroller is flaky.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    SplitView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.SplitView</summary>
        /// </signature>
    }
});

kendo.mobile.ui.SplitView = (function() {
var original = kendo.mobile.ui.SplitView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the SplitView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    expandPanes: function() {
        /// <signature>
        /// <summary>
        /// Displays the collapsible panes; has effect only when the device is in portrait orientation.
        /// </summary>
        /// </signature>
    },
    collapsePanes: function() {
        /// <signature>
        /// <summary>
        /// Collapses back the collapsible panes (displayed previously with expandPanes); has effect only when the device is in portrait orientation.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileSplitView = function() {
    this.data("kendoMobileSplitView", new kendo.mobile.ui.SplitView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileSplitView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.SplitView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.SplitView">The kendo.mobile.ui.SplitView instance (if present).</returns>
        /// </signature>
    },
    kendoMobileSplitView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.SplitView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;style — String (default: "horizontal")
        /// &#10;Defines the SplitView style - horizontal or vertical.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Switch: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Switch</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Switch = (function() {
var original = kendo.mobile.ui.Switch;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    check: function(check) {
        /// <signature>
        /// <summary>
        /// Get/Set the checked state of the widget.
        /// </summary>
        /// <param name="check" type="Boolean" >Whether to turn the widget on or off.</param>
        /// <returns type="Boolean">The checked state of the widget.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Switch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Changes the enabled state of the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether to enable or disable the widget.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Forces the Switch to recalculate its dimensions. Useful when major changes in the interface happen dynamically, like for instance changing the skin.
        /// </summary>
        /// </signature>
    },
    toggle: function() {
        /// <signature>
        /// <summary>
        /// Toggle the checked state of the widget.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileSwitch = function() {
    this.data("kendoMobileSwitch", new kendo.mobile.ui.Switch());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileSwitch: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Switch widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Switch">The kendo.mobile.ui.Switch instance (if present).</returns>
        /// </signature>
    },
    kendoMobileSwitch: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Switch widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;checked — Boolean (default: false)
        /// &#10;The checked state of the widget.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow the user to change its checked state. The widget is enabled by default.
        /// &#10;
        /// &#10;offLabel — String (default: "OFF")
        /// &#10;The OFF label.
        /// &#10;
        /// &#10;onLabel — String (default: "ON")
        /// &#10;The ON label.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    TabStrip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.TabStrip</summary>
        /// </signature>
    }
});

kendo.mobile.ui.TabStrip = (function() {
var original = kendo.mobile.ui.TabStrip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    badge: function(tab,value) {
        /// <signature>
        /// <summary>
        /// Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        /// </summary>
        /// <param name="tab" type="Object" >The target tab specified either as a jQuery selector/object or as an item index.</param>
        /// <param name="value" type="Object" >The target value to be set or false to be removed.</param>
        /// <returns type="String|kendo.mobile.ui.TabStrip">Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.</returns>
        /// </signature>
    },
    currentItem: function() {
        /// <signature>
        /// <summary>
        /// Get the currently selected tab DOM element.
        /// </summary>
        /// <returns type="jQuery">the currently selected tab DOM element.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    switchTo: function(url) {
        /// <signature>
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="Object" >The URL or zero based index of the tab.</param>
        /// </signature>
    },
    switchByFullUrl: function(url) {
        /// <signature>
        /// <summary>
        /// Set the mobile TabStrip active tab to the tab with the specified full URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        /// </summary>
        /// <param name="url" type="String" >The URL of the tab.</param>
        /// </signature>
    },
    clear: function() {
        /// <signature>
        /// <summary>
        /// Clear the currently selected tab.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileTabStrip = function() {
    this.data("kendoMobileTabStrip", new kendo.mobile.ui.TabStrip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileTabStrip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.TabStrip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.TabStrip">The kendo.mobile.ui.TabStrip instance (if present).</returns>
        /// </signature>
    },
    kendoMobileTabStrip: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.TabStrip widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;selectedIndex — Number (default: 0)
        /// &#10;The index of the initially selected tab.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    View: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.View</summary>
        /// </signature>
    }
});

kendo.mobile.ui.View = (function() {
var original = kendo.mobile.ui.View;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    contentElement: function() {
        /// <signature>
        /// <summary>
        /// Retrieves the current content holder of the View - this is the content element if the View is stretched or the scroll container otherwise.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the View for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the user interaction with the view and its contents.
        /// </summary>
        /// <param name="enable" type="Boolean" >Omitting the parameter or passing true enables the view. Passing false disables the view.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileView = function() {
    this.data("kendoMobileView", new kendo.mobile.ui.View());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.View widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.View">The kendo.mobile.ui.View instance (if present).</returns>
        /// </signature>
    },
    kendoMobileView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.View widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;model — String (default: null)
        /// &#10;The MVVM model to bind to. If a string is passed, The view will try to resolve a reference to the view model variable in the global scope.
        /// &#10;
        /// &#10;reload — Boolean (default: false)
        /// &#10;Applicable to remote views only. If set to true, the remote view contents will be reloaded from the server (using Ajax) each time the view is navigated to.
        /// &#10;
        /// &#10;stretch — Boolean (default: false)
        /// &#10;If set to true, the view will stretch its child contents to occupy the entire view, while disabling kinetic scrolling.
/// &#10;Useful if the view contains an image or a map.
        /// &#10;
        /// &#10;title — String 
        /// &#10;The text to display in the NavBar title (if present) and the browser title.
        /// &#10;
        /// &#10;useNativeScrolling — Boolean (default: false)
        /// &#10;If set to true, the view will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
/// &#10;Native scrolling is only enabled on platforms that support it: iOS > 5+, Android > 3+, WP8. BlackBerry devices do support it, but the native scroller is flaky.
        /// &#10;
        /// &#10;zoom — Boolean (default: false)
        /// &#10;If set to true, the user can zoom in/out the contents of the view using the pinch/zoom gesture.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.mobile.ui, {
    Widget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.mobile.ui.Widget</summary>
        /// </signature>
    }
});

kendo.mobile.ui.Widget = (function() {
var original = kendo.mobile.ui.Widget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    view: function() {
        /// <signature>
        /// <summary>
        /// Returns the kendo.mobile.ui.View which contains the widget. If the widget is contained in a splitview, modalview, or drawer, the respective widget instance is returned.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMobileWidget = function() {
    this.data("kendoMobileWidget", new kendo.mobile.ui.Widget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMobileWidget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.mobile.ui.Widget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.mobile.ui.Widget">The kendo.mobile.ui.Widget instance (if present).</returns>
        /// </signature>
    },
    kendoMobileWidget: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.mobile.ui.Widget widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});


intellisense.annotate(kendo.ui, {
    AutoComplete: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.AutoComplete</summary>
        /// </signature>
    }
});

kendo.ui.AutoComplete = (function() {
var original = kendo.ui.AutoComplete;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the widget suggestion popup.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of of the data item.</param>
        /// <returns type="Object">the data item at the specified index. Returns undefined if the index is not within bounds.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the suggestion popup by rendering all items again.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The value to search for. All matches are displayed in the suggestion popup.</param>
        /// </signature>
    },
    select: function(item) {
        /// <signature>
        /// <summary>
        /// Selects the item provided as an argument and updates the value of the widget.
        /// </summary>
        /// <param name="item" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    suggest: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the widget.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">the value of the widget.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoAutoComplete = function() {
    this.data("kendoAutoComplete", new kendo.ui.AutoComplete());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoAutoComplete: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.AutoComplete widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.AutoComplete">The kendo.ui.AutoComplete instance (if present).</returns>
        /// </signature>
    },
    kendoAutoComplete: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.AutoComplete widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to display suggestions for the current value. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;dataTextField — String (default: null)
        /// &#10;The field of the data item used when searching for suggestions.  This is the text that will be displayed in the list of matched results.
        /// &#10;
        /// &#10;delay — Number (default: 200)
        /// &#10;The delay in milliseconds between a keystroke and when the widget displays the suggestion popup.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
        /// &#10;
        /// &#10;filter — String (default: "startswith")
        /// &#10;The filtering method used to determine the suggestions for the current value. The default filter is "startswith" -
/// &#10;all data items which begin with the current widget value are displayed in the suggestion popup. The supported filter values are startswith, endswith and contains.
        /// &#10;
        /// &#10;height — Number (default: 200)
        /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
        /// &#10;
        /// &#10;highlightFirst — Boolean (default: true)
        /// &#10;If set to true the first suggestion will be automatically highlighted.
        /// &#10;
        /// &#10;ignoreCase — Boolean (default: true)
        /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
        /// &#10;
        /// &#10;minLength — Number (default: 1)
        /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
        /// &#10;
        /// &#10;placeholder — String (default: "")
        /// &#10;The hint displayed by the widget when it is empty. Not set by default.
        /// &#10;
        /// &#10;separator — String (default: "")
        /// &#10;The character used to separate multiple values. Empty by default.
        /// &#10;
        /// &#10;suggest — Boolean (default: false)
        /// &#10;If set to true the widget will automatically use the first suggestion as its value.
        /// &#10;
        /// &#10;headerTemplate — String|Function 
        /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
        /// &#10;
        /// &#10;template — String|Function 
        /// &#10;The template used to render the suggestions. By default the widget displays only the text of the suggestion (configured via dataTextField).
        /// &#10;
        /// &#10;valuePrimitive — Boolean (default: false)
        /// &#10;Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item text field. If set to false, the View-Model field will be updated with the selected item.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Button: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Button</summary>
        /// </signature>
    }
});

kendo.ui.Button = (function() {
var original = kendo.ui.Button;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    enable: function(toggle) {
        /// <signature>
        /// <summary>
        /// Enables or disables the Button.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Indicates whether the Button should be enabled or disabled. Truthy and falsy arguments are accepted. If no argument is supplied, the Button will assume true and will be enabled.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoButton = function() {
    this.data("kendoButton", new kendo.ui.Button());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoButton: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Button widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Button">The kendo.ui.Button instance (if present).</returns>
        /// </signature>
    },
    kendoButton: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Button widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;Indicates whether the Button should be enabled or disabled. By default, it is enabled, unless a disabled="disabled" attribute is detected.
        /// &#10;
        /// &#10;icon — String 
        /// &#10;Defines a name of an existing icon in the Kendo UI theme sprite. The icon will be applied as background image of a span element inside the Button.
/// &#10;The span element can be added automatically by the widget, or an existing element can be used, if it has a k-icon CSS class applied.
/// &#10;For a list of available icon names, please refer to the Icons demo.
        /// &#10;
        /// &#10;imageUrl — String 
        /// &#10;Defines a URL, which will be used for an img element inside the Button. The URL can be relative or absolute. In case it is relative, it will be evaluated with relation to the web page URL.The img element can be added automatically by the widget, or an existing element can be used, if it has a k-image CSS class applied.
        /// &#10;
        /// &#10;spriteCssClass — String 
        /// &#10;Defines a CSS class (or multiple classes separated by spaces), which will be used for applying a background image to a span element inside the Button.
/// &#10;In case you want to use an icon from the Kendo UI theme sprite background image, it is easier to use the icon property.The span element can be added automatically by the widget, or an existing element can be used, if it has a k-sprite CSS class applied.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Calendar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Calendar</summary>
        /// </signature>
    }
});

kendo.ui.Calendar = (function() {
var original = kendo.ui.Calendar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    current: function() {
        /// <signature>
        /// <summary>
        /// Gets currently focused date.
        /// </summary>
        /// <returns type="Date">The current focused date shown in the calendar.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Calendar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the max value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the calendar.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the min value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the calendar.</returns>
        /// </signature>
    },
    navigate: function(value,view) {
        /// <signature>
        /// <summary>
        /// Navigates to view.
        /// </summary>
        /// <param name="value" type="Date" >Desired date.</param>
        /// <param name="view" type="String" >Desired view.</param>
        /// </signature>
    },
    navigateDown: function(value) {
        /// <signature>
        /// <summary>
        /// Navigates to the lower view.
        /// </summary>
        /// <param name="value" type="Date" >Desired date.</param>
        /// </signature>
    },
    navigateToFuture: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the future.
        /// </summary>
        /// </signature>
    },
    navigateToPast: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the past.
        /// </summary>
        /// </signature>
    },
    navigateUp: function() {
        /// <signature>
        /// <summary>
        /// Navigates to the upper view.
        /// </summary>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the calendar.
        /// </summary>
        /// <param name="value" type="Object" >The date to set.</param>
        /// <returns type="Date">The value of the calendar.</returns>
        /// </signature>
    },
    view: function() {
        /// <signature>
        /// <summary>
        /// Gets an instance of the current view used by the calendar.
        /// </summary>
        /// <returns type="Object">The instance of the current view used by the calendar.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoCalendar = function() {
    this.data("kendoCalendar", new kendo.ui.Calendar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoCalendar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Calendar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Calendar">The kendo.ui.Calendar instance (if present).</returns>
        /// </signature>
    },
    kendoCalendar: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Calendar widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;dates — Array 
        /// &#10;Specifies a list of dates, which will be passed to the month template.
        /// &#10;
        /// &#10;depth — String 
        /// &#10;Specifies the navigation depth. The following
/// &#10;settings are available for the depth value:
        /// &#10;
        /// &#10;footer — String|Function 
        /// &#10;The template which renders the footer. If false, the footer will not be rendered.
        /// &#10;
        /// &#10;format — String (default: "MM/dd/yyyy")
        /// &#10;Specifies the format, which is used to parse value set with value() method.
        /// &#10;
        /// &#10;max — Date (default: Date(2099, 11, 31))
        /// &#10;Specifies the maximum date, which the calendar can show.
        /// &#10;
        /// &#10;min — Date (default: Date(1900, 0, 1))
        /// &#10;Specifies the minimum date, which the calendar can show.
        /// &#10;
        /// &#10;month — Object 
        /// &#10;Templates for the cells rendered in "month" view.
        /// &#10;
        /// &#10;start — String (default: "month")
        /// &#10;Specifies the start view.
/// &#10;The following settings are available for the start value:
        /// &#10;
        /// &#10;value — Date (default: null)
        /// &#10;Specifies the selected date.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ColorPalette: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ColorPalette</summary>
        /// </signature>
    }
});

kendo.ui.ColorPalette = (function() {
var original = kendo.ui.ColorPalette;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a string in format #FFFFFF.If one argument is given, it selects the new color and updates the UI. The argument can be a string in hex, rgb or rgba format, or a kendo.Color object object.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoColorPalette = function() {
    this.data("kendoColorPalette", new kendo.ui.ColorPalette());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoColorPalette: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ColorPalette widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ColorPalette">The kendo.ui.ColorPalette instance (if present).</returns>
        /// </signature>
    },
    kendoColorPalette: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.ColorPalette widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;palette — String|Array (default: "basic")
        /// &#10;Specifies the color palette to display.
/// &#10;It can be a string with comma-separated colors in hex representation, an array of kendo.Color object objects or of strings that parseColor understands.  As a shortcut, you can pass "basic" to get the simple palette (this is the default) or "websafe" to get the Web-safe palette.
        /// &#10;
        /// &#10;columns — Number (default: 10)
        /// &#10;The number of columns to display.  When you use the "websafe" palette, this will automatically default to 18.
        /// &#10;
        /// &#10;tileSize — Number (default: 14)
        /// &#10;The size of a color cell.
        /// &#10;
        /// &#10;tileSize — Object 
        /// &#10;The size of a color cell.
        /// &#10;
        /// &#10;value — String (default: null)
        /// &#10;Specifies the initially selected color.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ColorPicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ColorPicker</summary>
        /// </signature>
    }
});

kendo.ui.ColorPicker = (function() {
var original = kendo.ui.ColorPicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the popup.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the popup element with the color selector.
        /// </summary>
        /// </signature>
    },
    toggle: function() {
        /// <signature>
        /// <summary>
        /// Toggles the popup.
        /// </summary>
        /// </signature>
    },
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoColorPicker = function() {
    this.data("kendoColorPicker", new kendo.ui.ColorPicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoColorPicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ColorPicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ColorPicker">The kendo.ui.ColorPicker instance (if present).</returns>
        /// </signature>
    },
    kendoColorPicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.ColorPicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;buttons — Boolean (default: true)
        /// &#10;Specifies whether the widget should display the Apply / Cancel buttons.Applicable only for the HSV selector, when a pallete is not specified.
        /// &#10;
        /// &#10;columns — Number 
        /// &#10;The number of columns to show in the color dropdown when a pallete is specified.
/// &#10;This is automatically initialized for the "basic" and "websafe" palettes.
/// &#10;If you use a custom palette then you can set this to some value that makes sense for your colors.
        /// &#10;
        /// &#10;tileSize — Number (default: 14)
        /// &#10;The size of a color cell.
        /// &#10;
        /// &#10;tileSize — Object 
        /// &#10;The size of a color cell.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Allows customization of "Apply" / "Cancel" labels.
        /// &#10;
        /// &#10;palette — String|Array (default: null)
        /// &#10;When a non-null palette argument is supplied, the drop-down will be
/// &#10;a simple color picker that lists the colors. The following are supported:If palette is missing or null, the widget will display the HSV
/// &#10;selector.
        /// &#10;
        /// &#10;opacity — Boolean (default: false)
        /// &#10;Only for the HSV selector.  If true, the widget will display the opacity slider.
/// &#10;Note that currently in HTML5 the  does not support opacity.
        /// &#10;
        /// &#10;preview — Boolean (default: true)
        /// &#10;Only applicable for the HSV selector.Displays the color preview element, along with an input field where the end user can paste a color in a CSS-supported notation.
        /// &#10;
        /// &#10;toolIcon — String (default: null)
        /// &#10;A CSS class name to display an icon in the color picker button.  If
/// &#10;specified, the HTML for the element will look like this:
        /// &#10;
        /// &#10;value — String (default: null)
        /// &#10;The initially selected color.
/// &#10;Note that when initializing the widget from an  element, the initial color will be decided by the field instead.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ComboBox: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ComboBox</summary>
        /// </signature>
    }
});

kendo.ui.ComboBox = (function() {
var original = kendo.ui.ComboBox;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the widget popup.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ComboBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the popup.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing ComboBox and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    suggest: function(value) {
        /// <signature>
        /// <summary>
        /// Sets the value of the widget to the specified argument and visually selects the text.
        /// </summary>
        /// <param name="value" type="String" >Characters to force a suggestion.</param>
        /// </signature>
    },
    text: function(text) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text of the ComboBox. Widget will select the item with same text. If
/// there are no matches then the text will be considered as a custom value of the widget.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the combobox.</returns>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the combobox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the combobox.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoComboBox = function() {
    this.data("kendoComboBox", new kendo.ui.ComboBox());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoComboBox: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ComboBox widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ComboBox">The kendo.ui.ComboBox instance (if present).</returns>
        /// </signature>
    },
    kendoComboBox: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.ComboBox widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Controls whether to bind the widget to the data source on initialization.
        /// &#10;
        /// &#10;cascadeFrom — String 
        /// &#10;Use it to set the Id of the parent ComboBox widget.
/// &#10;Help topic showing how cascading functionality works
        /// &#10;
        /// &#10;cascadeFromField — String 
        /// &#10;Defines the field to be used to filter the data source. If not defiend the parent's dataValueField option will be used.
/// &#10;Help topic showing how cascading functionality works
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;dataTextField — String (default: "")
        /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
        /// &#10;
        /// &#10;dataValueField — String (default: "")
        /// &#10;The field of the data item that provides the value of the widget.
        /// &#10;
        /// &#10;delay — Number (default: 200)
        /// &#10;The delay in milliseconds between a keystroke and when the widget displays the popup.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
        /// &#10;
        /// &#10;filter — String (default: "none")
        /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
/// &#10;The supported filter values are startswith, endswith and contains.
        /// &#10;
        /// &#10;height — Number (default: 200)
        /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
        /// &#10;
        /// &#10;highlightFirst — Boolean (default: true)
        /// &#10;If set to true the first suggestion will be automatically highlighted.
        /// &#10;
        /// &#10;ignoreCase — String (default: true)
        /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
        /// &#10;
        /// &#10;index — Number (default: -1)
        /// &#10;The index of the initially selected item. The index is 0 based.
        /// &#10;
        /// &#10;minLength — Number (default: 1)
        /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
        /// &#10;
        /// &#10;placeholder — String (default: "")
        /// &#10;The hint displayed by the widget when it is empty. Not set by default.
        /// &#10;
        /// &#10;suggest — Boolean (default: false)
        /// &#10;If set to true the widget will automatically use the first suggestion as its value.
        /// &#10;
        /// &#10;headerTemplate — String|Function 
        /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
        /// &#10;
        /// &#10;template — String|Function 
        /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
        /// &#10;
        /// &#10;text — String (default: "")
        /// &#10;The text of the widget used when the autoBind is set to false.
        /// &#10;
        /// &#10;value — String (default: "")
        /// &#10;The value of the widget.
        /// &#10;
        /// &#10;valuePrimitive — Boolean (default: false)
        /// &#10;Specifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DatePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DatePicker</summary>
        /// </signature>
    }
});

kendo.ui.DatePicker = (function() {
var original = kendo.ui.DatePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the calendar.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DatePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the DatePicker widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the DatePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the max value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The max date to set.</param>
        /// <returns type="Date">The max value of the DatePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the min value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The min date to set.</param>
        /// <returns type="Date">The min value of the DatePicker.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the calendar.
        /// </summary>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Changes the initial DatePicker configuration. Will be included in Q3 2013 SP1. Currently available in Q3 2013 internal builds only.
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets/Sets the value of the DatePicker.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Date">The value of the DatePicker.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDatePicker = function() {
    this.data("kendoDatePicker", new kendo.ui.DatePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDatePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DatePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DatePicker">The kendo.ui.DatePicker instance (if present).</returns>
        /// </signature>
    },
    kendoDatePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DatePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the calendar popup. Setting the animation option to false will disable the opening and closing animations. As a result the calendar popup will open and close instantly.
        /// &#10;
        /// &#10;ARIATemplate — String (default: "Current focused date is #=kendo.toString(data.current, 'D'#"))
        /// &#10;Specifies a template used to populate value of the aria-label attribute.
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;dates — Array 
        /// &#10;Specifies a list of dates, which will be passed to the month template.
        /// &#10;
        /// &#10;depth — String 
        /// &#10;Specifies the navigation depth. The following
/// &#10;settings are available for the depth value:
        /// &#10;
        /// &#10;footer — String|Function 
        /// &#10;The template which renders the footer of the calendar. If false, the footer will not be rendered.
        /// &#10;
        /// &#10;format — String (default: "MM/dd/yyyy")
        /// &#10;Specifies the format, which is used to format the value of the DatePicker displayed in the input. The format also will be used to parse the input.
        /// &#10;
        /// &#10;max — Date (default: Date(2099, 11, 31))
        /// &#10;Specifies the maximum date, which the calendar can show.
        /// &#10;
        /// &#10;min — Date (default: Date(1900, 0, 1))
        /// &#10;Specifies the minimum date that the calendar can show.
        /// &#10;
        /// &#10;month — Object 
        /// &#10;Templates for the cells rendered in the calendar "month" view.
        /// &#10;
        /// &#10;parseFormats — Array 
        /// &#10;Specifies a lis of date formats used to parse the value set with value() method or by direct user input. If not set the value of the format will be used.
/// &#10; Note that format option is always used parsing process.
        /// &#10;
        /// &#10;start — String (default: "month")
        /// &#10;Specifies the start view.
/// &#10;The following settings are available for the start value:
        /// &#10;
        /// &#10;value — Date (default: null)
        /// &#10;Specifies the selected date.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DateTimePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DateTimePicker</summary>
        /// </signature>
    }
});

kendo.ui.DateTimePicker = (function() {
var original = kendo.ui.DateTimePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function(view) {
        /// <signature>
        /// <summary>
        /// Closes the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DateTimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables a DateTimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a DateTimePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datetimepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the maximum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a DateTimePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the minimum value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a DateTimePicker.</returns>
        /// </signature>
    },
    open: function(view) {
        /// <signature>
        /// <summary>
        /// Opens the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// 
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>
        /// </signature>
    },
    toggle: function(view) {
        /// <signature>
        /// <summary>
        /// Toggles the calendar or the time drop-down list.
        /// </summary>
        /// <param name="view" type="String" >The view of the DateTimePicker, expressed as a string. Available views are "time" and "date".</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the DateTimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a DateTimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a DateTimePicker.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDateTimePicker = function() {
    this.data("kendoDateTimePicker", new kendo.ui.DateTimePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDateTimePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DateTimePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DateTimePicker">The kendo.ui.DateTimePicker instance (if present).</returns>
        /// </signature>
    },
    kendoDateTimePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DateTimePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the popups. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.
        /// &#10;
        /// &#10;ARIATemplate — String (default: "Current focused date is #=kendo.toString(data.current, 'G'#"))
        /// &#10;Specifies a template used to populate value of the aria-label attribute.
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;dates — Array 
        /// &#10;Specifies a list of dates, which will be passed to the month template of the DateView. All dates, which match the date portion of the selected date will be used to re-bind the TimeView.
        /// &#10;
        /// &#10;depth — String 
        /// &#10;Specifies the navigation depth of the calendar. The following
/// &#10;settings are available for the depth value:
        /// &#10;
        /// &#10;footer — String 
        /// &#10;The template which renders the footer of the calendar. If false, the footer will not be rendered.
        /// &#10;
        /// &#10;format — String (default: "MM/dd/yyyy h:mm tt")
        /// &#10;Specifies the format, which is used to format the value of the DateTimePicker displayed in the input. The format also will be used to parse the input.
        /// &#10;
        /// &#10;interval — Number (default: 30)
        /// &#10;Specifies the interval, between values in the popup list, in minutes.
        /// &#10;
        /// &#10;max — Date (default: Date(2099, 11, 31))
        /// &#10;Specifies the maximum date, which the calendar can show.
        /// &#10;
        /// &#10;min — Date (default: Date(1900, 0, 1))
        /// &#10;Specifies the minimum date that the calendar can show.
        /// &#10;
        /// &#10;month — Object 
        /// &#10;Templates for the cells rendered in the calendar "month" view.
        /// &#10;
        /// &#10;parseFormats — Array 
        /// &#10;Specifies the formats, which are used to parse the value set with value() method or by direct input. If not set the value of the options.format and options.timeFormat will be used. Note that value of the format option is always used.
        /// &#10;
        /// &#10;start — String (default: "month")
        /// &#10;Specifies the start view of the calendar.
/// &#10; The following settings are available for the start value:
        /// &#10;
        /// &#10;timeFormat — String (default: "h:mm tt")
        /// &#10;Specifies the format, which is used to format the values in the time drop-down list.
        /// &#10;
        /// &#10;value — Date (default: null)
        /// &#10;Specifies the selected value.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Draggable: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Draggable</summary>
        /// </signature>
    }
});

kendo.ui.Draggable = (function() {
var original = kendo.ui.Draggable;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    cancelHold: function() {
        /// <signature>
        /// <summary>
        /// Has effect only when holdToDrag is set to true. Cancels the activated state of the widget, caused by pressing and holding.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDraggable = function() {
    this.data("kendoDraggable", new kendo.ui.Draggable());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDraggable: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Draggable widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Draggable">The kendo.ui.Draggable instance (if present).</returns>
        /// </signature>
    },
    kendoDraggable: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Draggable widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;axis — String (default: null)
        /// &#10;Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".
        /// &#10;
        /// &#10;cursorOffset — Object (default: null)
        /// &#10;If set, specifies the offset of the hint relative to the mouse cursor/finger.
/// &#10;By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: top and left.
        /// &#10;
        /// &#10;distance — Number (default: 5)
        /// &#10;The required distance that the mouse should travel in order to initiate a drag.
        /// &#10;
        /// &#10;group — String (default: "default")
        /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
        /// &#10;
        /// &#10;hint — Function 
        /// &#10;Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.
        /// &#10;
        /// &#10;holdToDrag — Boolean (default: false)
        /// &#10;Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture. When set to true, the widget will be activated after the user taps and holds the finger on the element for a short amount of time.The draggable will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately. The activated mode can be canceled by calling cancelHold.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DropDownList: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropDownList</summary>
        /// </signature>
    }
});

kendo.ui.DropDownList = (function() {
var original = kendo.ui.DropDownList;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the widget popup.
        /// </summary>
        /// </signature>
    },
    dataItem: function(index) {
        /// <signature>
        /// <summary>
        /// Returns the data item at the specified index. If the index is not specified, the selected index will be used.
        /// </summary>
        /// <param name="index" type="Number" >The zero-based index of the data record.</param>
        /// <returns type="Object">The raw data record. Returns undefined if no data.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the DropDownList for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the popup.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Controls whether the widget is editable or readonly.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the datepicker should be readonly or editable.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Selects an item, which starts with the provided value.
        /// </summary>
        /// <param name="word" type="String" >The search value.</param>
        /// </signature>
    },
    select: function(li) {
        /// <signature>
        /// <summary>
        /// Gets or sets the selected item. Selects the item provided as an argument and updates the value and text of the widget.
        /// </summary>
        /// <param name="li" type="Object" >A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.</param>
        /// <returns type="Number">The index of the selected item, if called with no parameters. If a custom value is entered, the returned selected index is -1. If called with a parameter as a setter.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing DropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    text: function(text) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text of the dropdownlist.
        /// </summary>
        /// <param name="text" type="String" >The text to set.</param>
        /// <returns type="String">The text of the dropdownlist.</returns>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the dropdownlist. The value will not be set if there is no item with such value. If value is undefined, text of the data item is used.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the dropdownlist.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDropDownList = function() {
    this.data("kendoDropDownList", new kendo.ui.DropDownList());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropDownList: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropDownList widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropDownList">The kendo.ui.DropDownList instance (if present).</returns>
        /// </signature>
    },
    kendoDropDownList: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DropDownList widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Controls whether to bind the widget to the data source on initialization.
        /// &#10;
        /// &#10;cascadeFrom — String 
        /// &#10;Use it to set the Id of the parent dropdownlist widget.
/// &#10;Help topic showing how cascading functionality works
        /// &#10;
        /// &#10;cascadeFromField — String 
        /// &#10;Defines the field to be used to filter the data source. If not defiend the parent's dataValueField option will be used.
/// &#10;Help topic showing how cascading functionality works
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;dataTextField — String (default: "")
        /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
        /// &#10;
        /// &#10;dataValueField — String (default: "")
        /// &#10;The field of the data item that provides the value of the widget.
        /// &#10;
        /// &#10;delay — Number (default: 500)
        /// &#10;Specifies the delay in milliseconds before the search-text typed by the end user is cleared.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
        /// &#10;
        /// &#10;height — Number (default: 200)
        /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
        /// &#10;
        /// &#10;ignoreCase — String (default: true)
        /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
        /// &#10;
        /// &#10;index — Number (default: 0)
        /// &#10;The index of the initially selected item. The index is 0 based.
        /// &#10;
        /// &#10;optionLabel — String|Object (default: "")
        /// &#10;Define the text of the default empty item. If the value is an object, then the widget will use it a valid data item.
/// &#10; Note that the optionLabel will not be available if the widget is empty.
        /// &#10;
        /// &#10;headerTemplate — String|Function 
        /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
        /// &#10;
        /// &#10;template — String|Function 
        /// &#10;The template used to render the items. By default the widget displays only the text of the data item (configured via dataTextField).
        /// &#10;
        /// &#10;valueTemplate — String|Function 
        /// &#10;The valueTemplate used to render the selected value. By default the widget displays only the text of the data item (configured via dataTextField).
        /// &#10;
        /// &#10;text — String (default: "")
        /// &#10;The text of the widget used when the autoBind is set to false.
        /// &#10;
        /// &#10;value — String (default: "")
        /// &#10;The value of the widget.
        /// &#10;
        /// &#10;valuePrimitive — Boolean (default: false)
        /// &#10;Spcifies the value binding behavior for the widget when the initial model value is null. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DropTarget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropTarget</summary>
        /// </signature>
    }
});

kendo.ui.DropTarget = (function() {
var original = kendo.ui.DropTarget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroyGroup: function() {
        /// <signature>
        /// <summary>
        /// Destroys all DropTarget instances from the group with the given name.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDropTarget = function() {
    this.data("kendoDropTarget", new kendo.ui.DropTarget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropTarget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropTarget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropTarget">The kendo.ui.DropTarget instance (if present).</returns>
        /// </signature>
    },
    kendoDropTarget: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DropTarget widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;group — String (default: "default")
        /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    DropTargetArea: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.DropTargetArea</summary>
        /// </signature>
    }
});

kendo.ui.DropTargetArea = (function() {
var original = kendo.ui.DropTargetArea;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoDropTargetArea = function() {
    this.data("kendoDropTargetArea", new kendo.ui.DropTargetArea());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoDropTargetArea: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.DropTargetArea widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.DropTargetArea">The kendo.ui.DropTargetArea instance (if present).</returns>
        /// </signature>
    },
    kendoDropTargetArea: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.DropTargetArea widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;group — String (default: "default")
        /// &#10;Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.
        /// &#10;
        /// &#10;filter — String (default: null)
        /// &#10;Selector to filter the drop targets in the area. Every matched element acts as a drop target and fires events on the DropTargetArea. Specifying the filter is mandatory.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Editor: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Editor</summary>
        /// </signature>
    }
});

kendo.ui.Editor = (function() {
var original = kendo.ui.Editor;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    createRange: function(document) {
        /// <signature>
        /// <summary>
        /// Creates a W3C-compatible Range object.
        /// </summary>
        /// <param name="document" type="Document" >The document that the range is associated with. If omitted, the document of the editor editing area will be used.</param>
        /// <returns type="Range">The created Range object.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    encodedValue: function() {
        /// <signature>
        /// <summary>
        /// Gets the HTML encoded value of the editor.
        /// </summary>
        /// </signature>
    },
    exec: function(name,params) {
        /// <signature>
        /// <summary>
        /// Executes an editor command on the currently selected text.
        /// </summary>
        /// <param name="name" type="String" >The name of the command to be executed.</param>
        /// <param name="params" type="String" >The parameters for the executed command.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the editable area.
        /// </summary>
        /// </signature>
    },
    getRange: function() {
        /// <signature>
        /// <summary>
        /// Gets a Range object form the editable area.
        /// </summary>
        /// <returns type="Range">A W3C-compatible Range object that represents the currently selected text in the editor area.</returns>
        /// </signature>
    },
    getSelection: function() {
        /// <signature>
        /// <summary>
        /// Gets a W3C-compatible Selection object form the editable area.
        /// </summary>
        /// <returns type="Selection">a W3C-compatible Selection object form the editable area.</returns>
        /// </signature>
    },
    paste: function(html) {
        /// <signature>
        /// <summary>
        /// Pastes HTML into the editable area. Cleans up MS Word formatting.
        /// </summary>
        /// <param name="html" type="String" >The HTML to be pasted.</param>
        /// </signature>
    },
    selectedHtml: function() {
        /// <signature>
        /// <summary>
        /// Serializes the currently selected text to a XHTML string.
        /// </summary>
        /// <returns type="String">The selectied text as valid XHTML.</returns>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reinitializes the editing area iframe. Should be used after moving the editor in the DOM.
        /// </summary>
        /// </signature>
    },
    selectRange: function(range) {
        /// <signature>
        /// <summary>
        /// Focuses the editable area and selects the range described by the range parameter.
        /// </summary>
        /// <param name="range" type="Range" >The Range object that describes the new selection.</param>
        /// </signature>
    },
    update: function() {
        /// <signature>
        /// <summary>
        /// Serializes the current state of the editable area to the <textarea> element.
/// This method should be called after modifying the editor content through the DOM.
        /// </summary>
        /// </signature>
    },
    state: function(toolName) {
        /// <signature>
        /// <summary>
        /// Get the state of a given tool. Introduced in the 2013.2.923 internal build.
        /// </summary>
        /// <param name="toolName" type="String" >The name of the tool that will be tested if formatted.</param>
        /// <returns type="Boolean">The state of the tool.</returns>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the editor value.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the Editor as HTML string.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoEditor = function() {
    this.data("kendoEditor", new kendo.ui.Editor());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoEditor: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Editor widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Editor">The kendo.ui.Editor instance (if present).</returns>
        /// </signature>
    },
    kendoEditor: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Editor widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;encoded — Boolean (default: true)
        /// &#10;Indicates whether the Editor should submit encoded HTML tags. By default, the submitted value is encoded.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Defines the text of the labels that are shown within the editor. Used primarily for localization.
        /// &#10;
        /// &#10;serialization — Object 
        /// &#10;Allows setting of serialization options.
        /// &#10;
        /// &#10;stylesheets — Array 
        /// &#10;Allows custom stylesheets to be included within the editing area.
        /// &#10;
        /// &#10;tools — Array 
        /// &#10;A collection of tools that are used to interact with the Editor.
/// &#10;Tools may be switched on by specifying their name.
/// &#10;Custom tools and tools that require configuration are defined as objects.The available editor commands are:
        /// &#10;
        /// &#10;imageBrowser — Object 
        /// &#10;Configuration for image browser dialog.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    FlatColorPicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.FlatColorPicker</summary>
        /// </signature>
    }
});

kendo.ui.FlatColorPicker = (function() {
var original = kendo.ui.FlatColorPicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    value: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the
/// currently selected color as a string in format #FFFFFF when the opacity
/// option is off, or rgba(255, 255, 255, 1) when opacity is requested.If one argument is given, it selects the new color and updates the UI.  The
/// argument can be a string in hex, rgb or rgba format, or a Color object.
/// This does not trigger the "change" event.
        /// </summary>
        /// <param name="color" type="String" ></param>
        /// <returns type="String">the string representation of the current color.</returns>
        /// </signature>
    },
    color: function(color) {
        /// <signature>
        /// <summary>
        /// Get or set the selected color. If no argument is given, this returns the currently selected color as a kendo.Color object.
        /// </summary>
        /// <param name="color" type="kendo.Color" >The color that should be set as the current value</param>
        /// <returns type="kendo.Color">the current value</returns>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >Whether the widget should be enabled (true) or disabled (false). If not specified, the method will enable the widget.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoFlatColorPicker = function() {
    this.data("kendoFlatColorPicker", new kendo.ui.FlatColorPicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoFlatColorPicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.FlatColorPicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.FlatColorPicker">The kendo.ui.FlatColorPicker instance (if present).</returns>
        /// </signature>
    },
    kendoFlatColorPicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.FlatColorPicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;opacity — Boolean (default: false)
        /// &#10;Specifies whether we should display the opacity slider to allow
/// &#10;selection of transparency.
        /// &#10;
        /// &#10;buttons — Boolean (default: false)
        /// &#10;Specifies whether the widget should display the Apply / Cancel buttons.
        /// &#10;
        /// &#10;value — String (default: null)
        /// &#10;Specifies the initially selected color.
        /// &#10;
        /// &#10;preview — Boolean (default: true)
        /// &#10;Specifies whether we should display the preview bar which displays the
/// &#10;current color and the input field.
        /// &#10;
        /// &#10;autoupdate — Boolean (default: true)
        /// &#10;Specifies whether the UI should be updated while the user is typing in
/// &#10;the input field, whenever a valid color can be parsed.  If you pass
/// &#10;false for this, the widget will update only when ENTER is pressed.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Allows customization of "Apply" / "Cancel" labels.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Grid: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Grid</summary>
        /// </signature>
    }
});

kendo.ui.Grid = (function() {
var original = kendo.ui.Grid;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addRow: function() {
        /// <signature>
        /// <summary>
        /// Adds an empty data item to the grid. In "incell" and "inline" editing mode a table row will be appended. Popup window will be displayed in "popup" editing mode.Fires the edit event.
        /// </summary>
        /// </signature>
    },
    cancelChanges: function() {
        /// <signature>
        /// <summary>
        /// Cancels any pending changes in the data source. Deleted data items are restored, new data items are removed and updated data items are restored to their initial state.
        /// </summary>
        /// </signature>
    },
    cancelRow: function() {
        /// <signature>
        /// <summary>
        /// Cancels editing for the table row which is in edit mode. Reverts any changes made.
        /// </summary>
        /// </signature>
    },
    cellIndex: function(cell) {
        /// <signature>
        /// <summary>
        /// Returns the index of the specified table cell. Skips group and detail table cells.
        /// </summary>
        /// <param name="cell" type="Object" >A string, DOM element or jQuery object which represents the table cell. A string is treated as a jQuery selector.</param>
        /// <returns type="Number">the index of the specified table cell.</returns>
        /// </signature>
    },
    clearSelection: function() {
        /// <signature>
        /// <summary>
        /// Clears the currently selected table rows or cells (depending on the current selection mode).
        /// </summary>
        /// </signature>
    },
    closeCell: function(isCancel) {
        /// <signature>
        /// <summary>
        /// Stops editing the table cell which is in edit mode. Requires "incell" edit mode.
        /// </summary>
        /// <param name="isCancel" type="Boolean" >A flag specifying whether to fire the cancel event. By default the event is not fired.</param>
        /// </signature>
    },
    collapseGroup: function(row) {
        /// <signature>
        /// <summary>
        /// Collapses the specified group. This hides the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    collapseRow: function(row) {
        /// <signature>
        /// <summary>
        /// Collapses the specified master table row. This hides its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    current: function(cell) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current cell for keyboard navigation.
        /// </summary>
        /// <param name="cell" type="jQuery" >DOM element or jQuery object which represents the navigatable cell.</param>
        /// <returns type="jQuery">the current cell.</returns>
        /// </signature>
    },
    dataItem: function(row) {
        /// <signature>
        /// <summary>
        /// Returns the data item to which the specified table row is bound.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.ObservableObject">the data item to which the specified table row is bound. More information about the ObservableObject type...</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    editCell: function(cell) {
        /// <signature>
        /// <summary>
        /// Switches the specified table cell in edit mode. Requires "incell" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="cell" type="jQuery" >The jQuery object which represents the table cell.</param>
        /// </signature>
    },
    editRow: function(row) {
        /// <signature>
        /// <summary>
        /// Switches the specified table row in edit mode. Requires "inline" or "popup" edit mode.Fires the edit event.
        /// </summary>
        /// <param name="row" type="jQuery" >The jQuery object which represents the table row.</param>
        /// </signature>
    },
    expandGroup: function(row) {
        /// <signature>
        /// <summary>
        /// Expands the specified group. This shows the group items.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the group table row. A string is treated as a jQuery selector. Expands specified group.</param>
        /// </signature>
    },
    expandRow: function(row) {
        /// <signature>
        /// <summary>
        /// Expands the specified master table row. This shows its detail table row.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the master table row. A string is treated as a jQuery selector. Expands specified master row.</param>
        /// </signature>
    },
    hideColumn: function(column) {
        /// <signature>
        /// <summary>
        /// Hides the specified grid column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Renders all table rows using the current data items.
        /// </summary>
        /// </signature>
    },
    removeRow: function(row) {
        /// <signature>
        /// <summary>
        /// Removes the specified table row from the grid. Also removes the corresponding data item from the data source.Fires the remove event.
        /// </summary>
        /// <param name="row" type="Object" >A string, DOM element or jQuery object which represents the table row. A string is treated as a jQuery selector.</param>
        /// </signature>
    },
    reorderColumn: function(destIndex,column) {
        /// <signature>
        /// <summary>
        /// Changes the position of the specified column.
        /// </summary>
        /// <param name="destIndex" type="Number" >The new position of the column. The destination index should be calculated with regard to all columns, including the hidden ones.</param>
        /// <param name="column" type="Object" >The column whose position should be changed.</param>
        /// </signature>
    },
    saveChanges: function() {
        /// <signature>
        /// <summary>
        /// Saves any pending changes by calling the sync method.Fires the saveChanges event.
        /// </summary>
        /// </signature>
    },
    saveRow: function() {
        /// <signature>
        /// <summary>
        /// Switches the table row which is in edit mode and saves any changes made by the user.
        /// </summary>
        /// </signature>
    },
    select: function(rows) {
        /// <signature>
        /// <summary>
        /// Gets or sets the table rows (or cells) which are selected.
        /// </summary>
        /// <param name="rows" type="Object" >A string, DOM element or jQuery object which represents the table row(s) or cell(s). A string is treated as a jQuery selector.</param>
        /// <returns type="jQuery">the selected table rows or cells.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    showColumn: function(column) {
        /// <signature>
        /// <summary>
        /// Shows the specified column.
        /// </summary>
        /// <param name="column" type="Object" >The index of the column or the field to which the columns is bound.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoGrid = function() {
    this.data("kendoGrid", new kendo.ui.Grid());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoGrid: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Grid widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Grid">The kendo.ui.Grid instance (if present).</returns>
        /// </signature>
    },
    kendoGrid: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Grid widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;altRowTemplate — String|Function 
        /// &#10;The template which renders the alternating table rows. Be default the grid renders a table row () for every data source item.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;columnResizeHandleWidth — Number (default: 3)
        /// &#10;Defines the width of the column resize handle in pixels. Apply a larger value for easier grasping.
        /// &#10;
        /// &#10;columns — Array 
        /// &#10;The configuration of the grid columns. An array of JavaScript objects or strings. A JavaScript objects are interpreted as column configurations. Strings are interpreted as the
/// &#10;field to which the column is bound. The grid will create a column for every item of the array.
        /// &#10;
        /// &#10;columnMenu — Boolean (default: false)
        /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
        /// &#10;
        /// &#10;columnMenu — Object 
        /// &#10;If set to true the grid will display the column menu when the user clicks the chevron icon in the column headers. The column menu allows the user to show and hide columns, filter and sort (if filtering and sorting are enabled).
/// &#10;By default the column menu is not enabled.Can be set to a JavaScript object which represents the column menu configuration.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;detailTemplate — String|Function 
        /// &#10;The template which renders the detail rows.
        /// &#10;
        /// &#10;editable — Boolean (default: false)
        /// &#10;If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
        /// &#10;
        /// &#10;editable — Object 
        /// &#10;If set to true the user would be able to edit the data to which the grid is bound to. By default editing is disabled.Can be set to a string ("inline", "incell" or "popup") to specify the editing mode. The default editing mode is "incell".Can be set to a JavaScript object which represents the editing configuration.
        /// &#10;
        /// &#10;filterable — Boolean (default: false)
        /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
        /// &#10;
        /// &#10;filterable — Object 
        /// &#10;If set to true the user can filter the data source using the grid filter menu. Filtering is disabled by default.Can be set to a JavaScript object which represents the filter menu configuration.
        /// &#10;
        /// &#10;groupable — Boolean (default: false)
        /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
        /// &#10;
        /// &#10;groupable — Object 
        /// &#10;If set to true the user could group the grid by dragging the column header cells. By default grouping is disabled.Can be set to a JavaScript object which represents the grouping configuration.
        /// &#10;
        /// &#10;height — Number|String 
        /// &#10;The height of the grid. Numeric values are treated as pixels.
        /// &#10;
        /// &#10;navigatable — Boolean (default: false)
        /// &#10;If set to true the use could navigate the widget using the keyboard navigation. By default keyboard navigation is disabled.
        /// &#10;
        /// &#10;pageable — Boolean (default: false)
        /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
        /// &#10;
        /// &#10;pageable — Object 
        /// &#10;If set to true the grid will display a pager. By default paging is disabled.Can be set to a JavaScript object which represents the pager configuration.
        /// &#10;
        /// &#10;reorderable — Boolean (default: false)
        /// &#10;If set to true the user could reorder the columns by dragging their header cells. By default reordering is disabled.
        /// &#10;
        /// &#10;resizable — Boolean (default: false)
        /// &#10;If set to true the user could resize the columns by dragging the edges of their header cells. By default resizing is disabled.
        /// &#10;
        /// &#10;rowTemplate — String|Function 
        /// &#10;The template which renders rows. Be default renders a table row () for every data source item.
        /// &#10;
        /// &#10;scrollable — Boolean (default: true)
        /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
        /// &#10;
        /// &#10;scrollable — Object 
        /// &#10;If set to true the grid will display a scrollbar when the total row height (or width) exceeds the grid height (or width). By default scrolling is enabled.Can be set to a JavaScript object which represents the scrolling configuration.
        /// &#10;
        /// &#10;selectable — Boolean|String (default: false)
        /// &#10;If set to true the user would be able to select grid rows. By default selection is disabled.Can also be set to the following string values:
        /// &#10;
        /// &#10;sortable — Boolean (default: false)
        /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
        /// &#10;
        /// &#10;sortable — Object 
        /// &#10;If set to true the user could sort the grid by clicking the column header cells. By default sorting is disabled.Can be set to a JavaScript object which represents the sorting configuration.
        /// &#10;
        /// &#10;toolbar — Array 
        /// &#10;The list of commands displayed in the grid toolbar. Commands can be custom or built-in ("cancel", "create", "save").The "cancel" built-in command reverts any data changes done by the end user.The "create" command adds an empty data item to the grid.The "save" command persists any data changes done by the end user.
        /// &#10;
        /// &#10;mobile — Boolean|String (default: false)
        /// &#10;If set to true and the grid is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
/// &#10;The grid uses same layout for both phone and tablet.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ListView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ListView</summary>
        /// </signature>
    }
});

kendo.ui.ListView = (function() {
var original = kendo.ui.ListView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    add: function() {
        /// <signature>
        /// <summary>
        /// Inserts empty item as first item on the current view and prepare it for editing.
        /// </summary>
        /// </signature>
    },
    cancel: function() {
        /// <signature>
        /// <summary>
        /// Cancels changes in currently edited item.
        /// </summary>
        /// </signature>
    },
    clearSelection: function() {
        /// <signature>
        /// <summary>
        /// Clears ListView selected items and triggers change event.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    edit: function(item) {
        /// <signature>
        /// <summary>
        /// Edit specified ListView item. Fires the edit event.
        /// </summary>
        /// <param name="item" type="jQuery" >jQuery object which represents the item to be edited.</param>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Reloads the data and repaints the list view.
        /// </summary>
        /// </signature>
    },
    remove: function(item) {
        /// <signature>
        /// <summary>
        /// Removes specified ListView item. Triggers remove event and if not prevented calls DataSource sync method.
        /// </summary>
        /// <param name="item" type="Object" >jQuery object which represents the item to be removed.</param>
        /// </signature>
    },
    save: function() {
        /// <signature>
        /// <summary>
        /// Saves edited ListView item. Triggers save event. If save event is not prevented and validation succeeds will call DataSource sync method.
        /// </summary>
        /// </signature>
    },
    select: function(items) {
        /// <signature>
        /// <summary>
        /// Get/set the selected listview item(s).
        /// </summary>
        /// <param name="items" type="Object" >Items to select.</param>
        /// <returns type="jQuery">the selected items if called without arguments.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing ListView and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoListView = function() {
    this.data("kendoListView", new kendo.ui.ListView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoListView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ListView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ListView">The kendo.ui.ListView instance (if present).</returns>
        /// </signature>
    },
    kendoListView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.ListView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used render table rows. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;editTemplate — Function 
        /// &#10;Specifies ListView item template in edit mode.
        /// &#10;
        /// &#10;navigatable — Boolean (default: false)
        /// &#10;Indicates whether keyboard navigation is enabled/disabled.
        /// &#10;
        /// &#10;selectable — Boolean|String (default: false)
        /// &#10;Indicates whether selection is enabled/disabled. Possible values:
        /// &#10;
        /// &#10;template — Function 
        /// &#10;Specifies ListView item template.
        /// &#10;
        /// &#10;altTemplate — Function 
        /// &#10;Template to be used for rendering the alternate items in the listview.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    MaskedTextBox: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.MaskedTextBox</summary>
        /// </signature>
    }
});

kendo.ui.MaskedTextBox = (function() {
var original = kendo.ui.MaskedTextBox;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the MaskedTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the maskedtextbox.
        /// </summary>
        /// <param name="value" type="String" >The value to set.</param>
        /// <returns type="String">The value of the widget.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMaskedTextBox = function() {
    this.data("kendoMaskedTextBox", new kendo.ui.MaskedTextBox());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMaskedTextBox: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.MaskedTextBox widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.MaskedTextBox">The kendo.ui.MaskedTextBox instance (if present).</returns>
        /// </signature>
    },
    kendoMaskedTextBox: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.MaskedTextBox widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;mask — String (default: "")
        /// &#10;Specifies the input mask. The following mask rules are supported:
        /// &#10;
        /// &#10;promptChar — String (default: "_")
        /// &#10;Specifies the character used to represent the absence of user input in the widget
        /// &#10;
        /// &#10;rules — Object 
        /// &#10;Defines an object of custom mask rules.
        /// &#10;
        /// &#10;value — String (default: "")
        /// &#10;Specifies the value of the MaskedTextBox widget.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Menu: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Menu</summary>
        /// </signature>
    }
});

kendo.ui.Menu = (function() {
var original = kendo.ui.Menu;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Appends an item to a Menu in the specified referenceItem's sub menu.
        /// </summary>
        /// <param name="item" type="Object" >Item to be appended, specified as a JSON object. An array of objects can also be passed.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    close: function(element) {
        /// <signature>
        /// <summary>
        /// Closes a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Menu for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables an item of a Menu. This can optionally be accomplished on
/// initialization by setting the disabled="disabled" on the desired menu item html element.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>
        /// <param name="enable" type="Boolean" >Desired state</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts an item into a Menu after the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    insertBefore: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts an item into a Menu before the specified referenceItem.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. Can also handle an array of such objects.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    open: function(element) {
        /// <signature>
        /// <summary>
        /// Opens a sub-menu of a specified item(s) in a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes a specified item(s) from a Menu.
        /// </summary>
        /// <param name="element" type="Object" >Target item selector.</param>
        /// <returns type="kendo.ui.Menu">Returns the Menu object to support chaining.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMenu = function() {
    this.data("kendoMenu", new kendo.ui.Menu());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMenu: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Menu widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Menu">The kendo.ui.Menu instance (if present).</returns>
        /// </signature>
    },
    kendoMenu: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Menu widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of Animation objects, used to change default animations. A value of false will disable all animations in the widget.Available animations for the Menu are listed below.  Each animation has a reverse options which is used for the close effect by default, but can be over-ridden
/// &#10;by setting the close animation.  Each animation also has a direction which can be set off the animation (i.e. slideIn:Down).
        /// &#10;
        /// &#10;closeOnClick — Boolean (default: true)
        /// &#10;Specifies that sub menus should close after item selection (provided they won't navigate).
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
/// &#10;Refer to the example below for a list of the supported properties.
        /// &#10;
        /// &#10;direction — String (default: "default")
        /// &#10;Specifies Menu opening direction. Can be "top", "bottom", "left", "right".
/// &#10;You can also specify different direction for root and sub menu items, separating them with space. The example below will initialize the root menu to open upwards and
/// &#10;its sub menus to the left.
        /// &#10;
        /// &#10;hoverDelay — Number (default: 100)
        /// &#10;Specifies the delay in ms before the menu is opened/closed - used to avoid accidental closure on leaving.
        /// &#10;
        /// &#10;openOnClick — Boolean (default: false)
        /// &#10;Specifies that the root sub menus will be opened on item click.
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;Root menu orientation. Could be horizontal or vertical.
        /// &#10;
        /// &#10;popupCollision — String 
        /// &#10;Specifies how Menu should adjust to screen boundaries. By default the strategy is "fit" for a sub menu with a horizontal parent,
/// &#10;meaning it will move to fit in screen boundaries in all directions, and "fit flip" for a sub menu with vertical parent, meaning it will fit vertically and flip over
/// &#10;its parent horizontally. You can also switch off the screen boundary detection completely if you set the popupCollision to false.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    MultiSelect: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.MultiSelect</summary>
        /// </signature>
    }
});

kendo.ui.MultiSelect = (function() {
var original = kendo.ui.MultiSelect;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the widget popup.
        /// </summary>
        /// </signature>
    },
    dataItems: function() {
        /// <signature>
        /// <summary>
        /// Returns list of raw data records corresponding to the selected items.
        /// </summary>
        /// <returns type="Array">The raw data records. Returns empty array ([]) if no selected options</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the MultiSelect for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the popup.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the popup by rendering all items again.
        /// </summary>
        /// </signature>
    },
    search: function(word) {
        /// <signature>
        /// <summary>
        /// Searches the data source for the provided value and displays any matches as suggestions.
        /// </summary>
        /// <param name="word" type="String" >The filter value.</param>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the dataSource of an existing DropDownList and rebinds it.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.DataSource" ></param>
        /// </signature>
    },
    toggle: function(toggle) {
        /// <signature>
        /// <summary>
        /// Opens or closes the widget popup.
        /// </summary>
        /// <param name="toggle" type="Boolean" >Defines the whether to open/close the drop-down list.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the multiselect. Accepts string value or Array of strings.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Array">The value of the multiselect.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoMultiSelect = function() {
    this.data("kendoMultiSelect", new kendo.ui.MultiSelect());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoMultiSelect: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.MultiSelect widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.MultiSelect">The kendo.ui.MultiSelect instance (if present).</returns>
        /// </signature>
    },
    kendoMultiSelect: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.MultiSelect widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Controls whether to bind the widget to the data source on initialization.
        /// &#10;
        /// &#10;autoClose — Boolean (default: true)
        /// &#10;Controls whether to close the widget suggestion list on item selection.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to display a list of values. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;dataTextField — String (default: "")
        /// &#10;The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.
        /// &#10;
        /// &#10;dataValueField — String (default: "")
        /// &#10;The field of the data item that provides the value of the widget.
        /// &#10;
        /// &#10;delay — Number (default: 200)
        /// &#10;Specifies the delay in milliseconds after which the multiselect will start filtering dataSource.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.
        /// &#10;
        /// &#10;filter — String (default: "none")
        /// &#10;The filtering method used to determine the suggestions for the current value. Filtration is turned of by default.
/// &#10;The supported filter values are startswith, endswith and contains.
        /// &#10;
        /// &#10;height — Number (default: 200)
        /// &#10;The height of the suggestion popup in pixels. The default value is 200 pixels.
        /// &#10;
        /// &#10;highlightFirst — Boolean (default: true)
        /// &#10;If set to true the first suggestion will be automatically highlighted.
        /// &#10;
        /// &#10;ignoreCase — String (default: true)
        /// &#10;If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.
        /// &#10;
        /// &#10;minLength — Number (default: 1)
        /// &#10;The minimum number of characters the user must type before a search is performed. Set to higher value than 1 if the search could match a lot of items.
        /// &#10;
        /// &#10;maxSelectedItems — Number (default: null)
        /// &#10;Defines the limit of the selected items. If set to null widget will not limit number of the selected items.
        /// &#10;
        /// &#10;placeholder — String (default: "")
        /// &#10;The hint displayed by the widget when it is empty. Not set by default.
        /// &#10;
        /// &#10;headerTemplate — String|Function 
        /// &#10;Specifies a static HTML content, which will be rendered as a header of the popup element.
        /// &#10;
        /// &#10;itemTemplate — String|Function 
        /// &#10;The template used to render the items in the popup list.
        /// &#10;
        /// &#10;tagTemplate — String 
        /// &#10;The template used to render the tags.
        /// &#10;
        /// &#10;value — Array (default: [])
        /// &#10;Define the value of the widget
        /// &#10;
        /// &#10;valuePrimitive — Boolean (default: false)
        /// &#10;Specifies the value binding behavior for the widget. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Notification: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Notification</summary>
        /// </signature>
    }
});

kendo.ui.Notification = (function() {
var original = kendo.ui.Notification;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    error: function() {
        /// <signature>
        /// <summary>
        /// This is a shorthand method for show(data, "error")
        /// </summary>
        /// </signature>
    },
    getNotifications: function() {
        /// <signature>
        /// <summary>
        /// Returns a jQuery collection of all visible notifications, displayed by the given widget instance. Each item in the collection is a div.k-notification element.
        /// </summary>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hides all notifications from the given widget instance.
        /// </summary>
        /// </signature>
    },
    info: function() {
        /// <signature>
        /// <summary>
        /// This is a shorthand method for show(data, "info")
        /// </summary>
        /// </signature>
    },
    show: function(data,type) {
        /// <signature>
        /// <summary>
        /// Displays a notification.
        /// </summary>
        /// <param name="data" type="Object" >Required. The string content for the notification; or the object with the values for the variables inside the notification template; or the function, which returns the required string or an object.</param>
        /// <param name="type" type="String" >The notification type. Built-in types include "info", "success", "warning" and "error". Custom types should match the types from the template configuration. If this argument is not supplied, then "info" is assumed.</param>
        /// </signature>
    },
    success: function() {
        /// <signature>
        /// <summary>
        /// This is a shorthand method for show(data, "success")
        /// </summary>
        /// </signature>
    },
    warning: function() {
        /// <signature>
        /// <summary>
        /// This is a shorthand method for show(data, "warning")
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoNotification = function() {
    this.data("kendoNotification", new kendo.ui.Notification());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoNotification: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Notification widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Notification">The kendo.ui.Notification instance (if present).</returns>
        /// </signature>
    },
    kendoNotification: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Notification widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;allowHideAfter — Number (default: 0)
        /// &#10;Indicates the period in milliseconds after which a notification can be dismissed (hidden) by the user.
        /// &#10;
        /// &#10;animation — Object|Boolean 
        /// &#10;Defines custom show and hide animations via an Kendo UI Animation object. Setting the value to false disables animations.
        /// &#10;
        /// &#10;appendTo — String (default: null)
        /// &#10;Defines the element to which the notifications will be appended or prepended (depending on the stacking direction).
        /// &#10;
        /// &#10;autoHideAfter — Number (default: 5000)
        /// &#10;Indicates the period in milliseconds after which a notification disappears automatically. Setting a zero value disables this behavior.
        /// &#10;
        /// &#10;button — Boolean (default: false)
        /// &#10;Determines whether the notifications will include a hide button. This setting works with the built-in templates only.
        /// &#10;
        /// &#10;height — Number|String (default: null)
        /// &#10;Defines the notifications' height. Numbers are treated as pixels.
        /// &#10;
        /// &#10;hideOnClick — Boolean (default: true)
        /// &#10;Determines whether notifications can be hidden by clicking anywhere on their content.
        /// &#10;
        /// &#10;position — Object 
        /// &#10;This setting applies to popup notifications only, i.e. in cases when appendTo is not set.
/// &#10;It determines the position of the first notification on the screen, as well as whether the notifications will move together with the page content during scrolling.
/// &#10;top takes precedence over bottom and left takes precedence over right.
        /// &#10;
        /// &#10;stacking — String (default: "default")
        /// &#10;Determines the direction in which multiple notification will stack (arrange) with regard to the first one. Possible values are "up", "right", "down", "left" and "default".
/// &#10;The "default" setting takes into consideration the applied position settings and is evaluated to "up" or "down".
        /// &#10;
        /// &#10;templates — Array 
        /// &#10;Describes the HTML markup of the different notification types as Kendo UI template strings. The built-in types are "info", "success", "warning" and "error".This documentation section assumes that you are familiar with Kendo UI templates.
        /// &#10;
        /// &#10;width — Number|String (default: null)
        /// &#10;Defines the notifications' width. Numbers are treated as pixels.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    NumericTextBox: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.NumericTextBox</summary>
        /// </signature>
    }
});

kendo.ui.NumericTextBox = (function() {
var original = kendo.ui.NumericTextBox;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the NumericTextBox for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables the widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >If set to true the widget will be enabled. If set to false the widget will be disabled.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >If set to true the widget will not allow user input. If set to false the widget will allow user input.</param>
        /// </signature>
    },
    focus: function() {
        /// <signature>
        /// <summary>
        /// Focuses the widget.
        /// </summary>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the max value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The max value to set.</param>
        /// <returns type="Number">The max value of the widget.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the min value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The min value to set.</param>
        /// <returns type="Number">The min value of the widget.</returns>
        /// </signature>
    },
    step: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the step value of the widget.
        /// </summary>
        /// <param name="value" type="Object" >The step value to set.</param>
        /// <returns type="Number">The step value of the widget.</returns>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the numerictextbox.
        /// </summary>
        /// <param name="value" type="Object" >The value to set.</param>
        /// <returns type="Number">The value of the widget.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoNumericTextBox = function() {
    this.data("kendoNumericTextBox", new kendo.ui.NumericTextBox());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoNumericTextBox: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.NumericTextBox widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.NumericTextBox">The kendo.ui.NumericTextBox instance (if present).</returns>
        /// </signature>
    },
    kendoNumericTextBox: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.NumericTextBox widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;decimals — Number (default: null)
        /// &#10;Specifies the number precision. If not set precision defined by current culture is used.
        /// &#10;
        /// &#10;downArrowText — String (default: "Decrease value")
        /// &#10;Specifies the text of the tooltip on the down arrow.
        /// &#10;
        /// &#10;format — String (default: "n")
        /// &#10;Specifies the format of the number. Any valid number format is allowed.
        /// &#10;
        /// &#10;max — Number (default: null)
        /// &#10;Specifies the largest value the user can enter.
        /// &#10;
        /// &#10;min — Number (default: null)
        /// &#10;Specifies the smallest value the user can enter.
        /// &#10;
        /// &#10;placeholder — String (default: "")
        /// &#10;The hint displayed by the widget when it is empty. Not set by default.
        /// &#10;
        /// &#10;spinners — Boolean (default: true)
        /// &#10;Specifies whether the up and down spin buttons should be rendered
        /// &#10;
        /// &#10;step — Number (default: 1)
        /// &#10;Specifies the value used to increment or decrement widget value.
        /// &#10;
        /// &#10;upArrowText — String (default: "Increase value")
        /// &#10;Specifies the text of the tooltip on the up arrow.
        /// &#10;
        /// &#10;value — Number (default: null)
        /// &#10;Specifies the value of the NumericTextBox widget.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Pager: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Pager</summary>
        /// </signature>
    }
});

kendo.ui.Pager = (function() {
var original = kendo.ui.Pager;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    totalPages: function() {
        /// <signature>
        /// <summary>
        /// Returns the number of pages.
        /// </summary>
        /// </signature>
    },
    pageSize: function() {
        /// <signature>
        /// <summary>
        /// Returns the page size - maximum number of items allowed on one page.
        /// </summary>
        /// </signature>
    },
    page: function() {
        /// <signature>
        /// <summary>
        /// Set the specified page as a current page. If called without arguments - returns the current page.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Updates all values of pager elements so that these values fit the values of DataSource. This method is automatically called after DataSource change event is fired.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Unbinds all callbacks created within pager initialization. This method doesn't remove pager element from DOM.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoPager = function() {
    this.data("kendoPager", new kendo.ui.Pager());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPager: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Pager widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Pager">The kendo.ui.Pager instance (if present).</returns>
        /// </signature>
    },
    kendoPager: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Pager widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;Indicates whether the pager refresh method will be called within its initialization.
        /// &#10;
        /// &#10;buttonCount — Number (default: 10)
        /// &#10;Defines the number of buttons displayed in the numeric pager.
        /// &#10;
        /// &#10;dataSource — Object 
        /// &#10;Instance of kendo DataSource. See the kendo.data.DataSource.This option is mandatory because the Pager is tightly connected with DataSource. The pager is UI widget for managing paging over the DataSource. The Pager gets values like page size or total count of items from DataSource.
        /// &#10;
        /// &#10;selectTemplate — String 
        /// &#10;The template for selected page number link.
        /// &#10;
        /// &#10;linkTemplate — String 
        /// &#10;The template for page number links.
        /// &#10;
        /// &#10;info — Boolean (default: true)
        /// &#10;Defines if a label showing current paging information will be displayed.
        /// &#10;
        /// &#10;input — Boolean (default: false)
        /// &#10;Defines if an input element which allows the user to navigate to given page will be displayed.
        /// &#10;
        /// &#10;numeric — Boolean (default: true)
        /// &#10;Defines if numeric portion of the pager will be shown.
        /// &#10;
        /// &#10;pageSizes — Boolean|Array (default: false)
        /// &#10;Displays a list with predefined page sizes. An array of values to be displayed can be provided. If pageSize option is provided for DataSource then this pageSize value will be automatically selected in created selectbox.
        /// &#10;
        /// &#10;previousNext — Boolean (default: true)
        /// &#10;Defines if buttons for navigating to the first, last, previous and next pages will be shown.
        /// &#10;
        /// &#10;refresh — Boolean (default: false)
        /// &#10;Defines if a refresh button will be displayed. Click on that button will call DataSource read() method to get actual data.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Defines texts shown within the pager. Use this option to customize or localize the pager messages.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    PanelBar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.PanelBar</summary>
        /// </signature>
    }
});

kendo.ui.PanelBar = (function() {
var original = kendo.ui.PanelBar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Appends an item/s to the PanelBar.
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as the JSON representation of an object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to append the new item in the PanelBar, can be omitted.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    collapse: function(element,useAnimation) {
        /// <signature>
        /// <summary>
        /// Collapses the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be collapsed, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporarily enables (true) or disables (false) any visual animation(s) when collapsing items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the PanelBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Enables (true) or disables (false) the specified item(s) of the
/// PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be enabled (true) or disabled (false), expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// <param name="enable" type="Boolean" >The desired state - enabled (true) or disabled (false) - of the target element(s).</param>
        /// </signature>
    },
    expand: function(element,useAnimation) {
        /// <signature>
        /// <summary>
        /// Expands the specified item(s) of a PanelBar.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be expanded, expressed as a selector.</param>
        /// <param name="useAnimation" type="Boolean" >_optional, default: _Temporarily enables (true) or disables (false) any visual animation(s) when expanding items.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts a PanelBar item after the specified referenceItem
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item after</param>
        /// </signature>
    },
    insertBefore: function(item,referenceItem) {
        /// <signature>
        /// <summary>
        /// Inserts a PanelBar item before the specified referenceItem
        /// </summary>
        /// <param name="item" type="Object" >Target item, specified as a JSON object. You can pass item text, content or contentUrl here. Can handle an TML string or array of such strings or JSON.</param>
        /// <param name="referenceItem" type="Object" >A reference item to insert the new item before.</param>
        /// <returns type="kendo.ui.PanelBar">Returns the PanelBar object to support chaining.</returns>
        /// </signature>
    },
    reload: function(element) {
        /// <signature>
        /// <summary>
        /// Reloads the content of a PanelBar from an AJAX request.
        /// </summary>
        /// <param name="element" type="Object" >Target element</param>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes the specified PanelBar item(s).
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item(s) to be removed, expressed as a selector string, DOM element or a jQuery object.</param>
        /// </signature>
    },
    select: function(element) {
        /// <signature>
        /// <summary>
        /// Selects the specified item of the PanelBar. If this method is invoked without arguments, it
/// returns the currently selected item.
        /// </summary>
        /// <param name="element" type="Object" >The PanelBar item to be selected, expressed as a string containing a selector expression or represented by a jQuery selector.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoPanelBar = function() {
    this.data("kendoPanelBar", new kendo.ui.PanelBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoPanelBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.PanelBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.PanelBar">The kendo.ui.PanelBar instance (if present).</returns>
        /// </signature>
    },
    kendoPanelBar: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.PanelBar widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Boolean 
        /// &#10;A collection of visual animations used when PanelBar items are expand or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of visual animations used when PanelBar items are expand or collapsed through
/// &#10;user interactions. Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;contentUrls — Array 
        /// &#10;Sets an array with the URLs from which the PanelBar items content to be loaded from. If only specific items should be loaded via Ajax, then you should set the URLs to the corresponding positions in the array and set the other elements to null.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used to render its items. Can be a JSON object/Array that contains an item or an Array of items to be rendered.
/// &#10;Refer to the example below for a list of the supported properties.
        /// &#10;
        /// &#10;expandMode — String (default: "multiple")
        /// &#10;Specifies how the PanelBar items are displayed when opened and closed. The following values
/// &#10;are available:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    ProgressBar: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.ProgressBar</summary>
        /// </signature>
    }
});

kendo.ui.ProgressBar = (function() {
var original = kendo.ui.ProgressBar;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables/Disables the ProgressBar widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the ProgressBar. If no argument is passed, the widget will be enabled.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the ProgressBar. It accepts a number, a string or false as a parameter. Setting the value to false will set the state of the ProgressBar to indeterminate. If no parameter is passed, it returns the underlying value.
        /// </summary>
        /// <param name="value" type="Number" >The value to be set.</param>
        /// <returns type="Number">the value of the widget.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoProgressBar = function() {
    this.data("kendoProgressBar", new kendo.ui.ProgressBar());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoProgressBar: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.ProgressBar widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.ProgressBar">The kendo.ui.ProgressBar instance (if present).</returns>
        /// </signature>
    },
    kendoProgressBar: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.ProgressBar widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the progress animation. Currently only the duration of the animation could be set.
        /// &#10;
        /// &#10;chunkCount — Number (default: 5)
        /// &#10;Specifies the number of chunks.
        /// &#10;
        /// &#10;enable — Boolean (default: true)
        /// &#10;If set to false the widget will be disabled. It will still allow changing the value. The widget is enabled by default.
        /// &#10;
        /// &#10;max — Number (default: 100)
        /// &#10;The maximum value of the ProgressBar.
        /// &#10;
        /// &#10;min — Number (default: 0)
        /// &#10;The minimum value of the ProgressBar.
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;The orientation of the ProgressBar. Possible values are horizontal and vertical.
        /// &#10;
        /// &#10;reverse — Boolean (default: false)
        /// &#10;Specifies if the progress direction will be reversed.
        /// &#10;
        /// &#10;showStatus — Boolean (default: true)
        /// &#10;Specifies if the progress status will be shown.
        /// &#10;
        /// &#10;type — String (default: "value")
        /// &#10;Specifies the type of the ProgressBar. The supported types are value, percent and chunk.
        /// &#10;
        /// &#10;value — Number 
        /// &#10;The underlying value of the ProgressBar.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    RangeSlider: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.RangeSlider</summary>
        /// </signature>
    }
});

kendo.ui.RangeSlider = (function() {
var original = kendo.ui.RangeSlider;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the RangeSlider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the RangeSlider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the RangeSlider.</param>
        /// </signature>
    },
    value: function(selectionStart,selectionEnd) {
        /// <signature>
        /// <summary>
        /// The value method gets or sets the start and end values of the RangeSlider. It
/// accepts an array as parameter, and returns an object array with the start and end
/// selection values.
        /// </summary>
        /// <param name="selectionStart" type="Number" >The selection start value of the RangeSlider.</param>
        /// <param name="selectionEnd" type="Number" >The selection start value of the RangeSlider.</param>
        /// <returns type="Array">The value of the RangeSlider.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoRangeSlider = function() {
    this.data("kendoRangeSlider", new kendo.ui.RangeSlider());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoRangeSlider: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.RangeSlider widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.RangeSlider">The kendo.ui.RangeSlider instance (if present).</returns>
        /// </signature>
    },
    kendoRangeSlider: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.RangeSlider widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;largeStep — Number (default: 5)
        /// &#10;The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
/// &#10;handle must be focused). Note: The allied largeStep will also set large tick for every large step.
        /// &#10;
        /// &#10;max — Number (default: 10)
        /// &#10;The maximum value of the RangeSlider.
        /// &#10;
        /// &#10;min — Number (default: 0)
        /// &#10;The minimum value of the RangeSlider.
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;F
/// &#10;The orientation of a RangeSlider; "horizontal" or
/// &#10;"vertical".
        /// &#10;
        /// &#10;selectionEnd — Number 
        /// &#10;The selection end value of the RangeSlider.
        /// &#10;
        /// &#10;selectionStart — Number 
        /// &#10;The selection start value of the RangeSlider.
        /// &#10;
        /// &#10;smallStep — Number (default: 1)
        /// &#10;The small step value of the RangeSlider. The underlying value will be changed when the end
/// &#10;user (1) clicks on the increase or decrease buttons of the RangeSlider, (2) presses the
/// &#10;arrow keys (the drag handle must be focused), or (3) drags the drag handle.
        /// &#10;
        /// &#10;tickPlacement — String (default: "both")
        /// &#10;Denotes the location of the tick marks in the RangeSlider. The available options are:
        /// &#10;
        /// &#10;tooltip — Object 
        /// &#10;Configuration of the RangeSlider tooltip.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Scheduler: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Scheduler</summary>
        /// </signature>
    }
});

kendo.ui.Scheduler = (function() {
var original = kendo.ui.Scheduler;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    addEvent: function(data) {
        /// <signature>
        /// <summary>
        /// Adds a new scheduler event and opens the edit form.
        /// </summary>
        /// <param name="data" type="Object" >The object containing the scheduler event fields.</param>
        /// </signature>
    },
    cancelEvent: function() {
        /// <signature>
        /// <summary>
        /// Cancels the scheduler event editing. Closes the edit form.
        /// </summary>
        /// </signature>
    },
    date: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current scheduler date.
        /// </summary>
        /// <param name="value" type="Date" >The new date to set.</param>
        /// <returns type="Date">the current date.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    editEvent: function(event) {
        /// <signature>
        /// <summary>
        /// Opens the specified scheduler event in the edit form.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be put in edit mode. Also accepts a string which is the uid of the event which should be edited.</param>
        /// </signature>
    },
    occurrenceByUid: function(uid) {
        /// <signature>
        /// <summary>
        /// Gets the event occurrence with the specified uid.
        /// </summary>
        /// <param name="uid" type="String" >The uid of the occurrence to look for.</param>
        /// <returns type="kendo.data.SchedulerEvent">the occurrence instance. Returns undefined if an occurrence with the specified uid is not found.</returns>
        /// </signature>
    },
    occurrencesInRange: function(start,end) {
        /// <signature>
        /// <summary>
        /// Gets a list of event occurrences in specified time range.
        /// </summary>
        /// <param name="start" type="Date" >The start date of the period.</param>
        /// <param name="end" type="Date" >The end date of the period.</param>
        /// <returns type="Array">a list of scheduler events filtered by the specified start/end period.</returns>
        /// </signature>
    },
    removeEvent: function(event) {
        /// <signature>
        /// <summary>
        /// Removes the specified scheduler event.
        /// </summary>
        /// <param name="event" type="Object" >The event which should be removed. Also accepts a string which is the uid of the event which should be removed.</param>
        /// </signature>
    },
    resourcesBySlot: function(slot) {
        /// <signature>
        /// <summary>
        /// Get the relevant resources for a given slot.
        /// </summary>
        /// <param name="slot" type="Object" ></param>
        /// <returns type="Object">The relevant resouces.</returns>
        /// </signature>
    },
    saveEvent: function() {
        /// <signature>
        /// <summary>
        /// Saves the scheduler event which is open in the edit form and closes it.
        /// </summary>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets the data source of the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.SchedulerDataSource" >The data source to which the widget should be bound.</param>
        /// </signature>
    },
    slotByPosition: function(xPosition,yPosition) {
        /// <signature>
        /// <summary>
        /// Get the time slot from given horizontal (x) and vertical (y) position.
        /// </summary>
        /// <param name="xPosition" type="Number" >The horizontal position.</param>
        /// <param name="yPosition" type="Number" >The vertical position.</param>
        /// <returns type="Object">The time slot.</returns>
        /// </signature>
    },
    slotByElement: function(element) {
        /// <signature>
        /// <summary>
        /// Get the time slot from given element.
        /// </summary>
        /// <param name="element" type="Object" ></param>
        /// <returns type="Object">The time slot.</returns>
        /// </signature>
    },
    view: function(type) {
        /// <signature>
        /// <summary>
        /// Gets or sets the current scheduler view.
        /// </summary>
        /// <param name="type" type="String" >The view type to select.</param>
        /// <returns type="kendo.ui.SchedulerView">the current scheduler view.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoScheduler = function() {
    this.data("kendoScheduler", new kendo.ui.Scheduler());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoScheduler: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Scheduler widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Scheduler">The kendo.ui.Scheduler instance (if present).</returns>
        /// </signature>
    },
    kendoScheduler: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Scheduler widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;allDayEventTemplate — String|Function 
        /// &#10;The template used to render the "all day" scheduler events.The fields which can be used in the template are:
        /// &#10;
        /// &#10;allDaySlot — Boolean (default: true)
        /// &#10;If set to true the scheduler will display a slot for "all day" events.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which contains the scheduler events. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.SchedulerDataSource
/// &#10;instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.SchedulerDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.SchedulerDataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;date — Date 
        /// &#10;The current date of the scheduler. Used to determine the period which is displayed by the widget.
        /// &#10;
        /// &#10;dateHeaderTemplate — String|Function 
        /// &#10;The template used to render the date header cells.By default the scheduler renders the date using the current culture date format.The fields which can be used in the template are:
        /// &#10;
        /// &#10;editable — Boolean (default: true)
        /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
        /// &#10;
        /// &#10;editable — Object 
        /// &#10;If set to true the user would be able to create new scheduler events and modify or delete existing ones.
        /// &#10;
        /// &#10;endTime — Date 
        /// &#10;The end time of the week and day views. The scheduler will display events ending before the endTime.
        /// &#10;
        /// &#10;eventTemplate — String|Function 
        /// &#10;The template used to render the scheduler events.The fields which can be used in the template are:
        /// &#10;
        /// &#10;footer — Boolean 
        /// &#10;If set to false the footer of the scheduler would not be displayed.
        /// &#10;
        /// &#10;footer — Object 
        /// &#10;If set to false the footer of the scheduler would not be displayed.
        /// &#10;
        /// &#10;group — Object 
        /// &#10;The configuration of the scheduler resource(s) grouping.
        /// &#10;
        /// &#10;height — Number|String 
        /// &#10;The height of the widget. Numeric values are treated as pixels.
        /// &#10;
        /// &#10;majorTick — Number (default: 60)
        /// &#10;The number of minutes represented by a major tick.
        /// &#10;
        /// &#10;majorTimeHeaderTemplate — String|Function 
        /// &#10;The template used to render the major ticks.By default the scheduler renders the time using the current culture time format.The fields which can be used in the template are:
        /// &#10;
        /// &#10;max — Date (default: 31/12/2099)
        /// &#10;Constraints the maximum date which can be selected via the scheduler navigation.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;The configuration of the scheduler messages. Use this option to customize or localize the scheduler messages.
        /// &#10;
        /// &#10;min — Date (default: 1/1/1900)
        /// &#10;Constraints the minimum date which can be selected via the scheduler navigation.
        /// &#10;
        /// &#10;minorTickCount — Number (default: 2)
        /// &#10;The number of time slots to display per major tick.
        /// &#10;
        /// &#10;minorTimeHeaderTemplate — String|Function 
        /// &#10;The template used to render the minor ticks.By default the scheduler renders a "&nbsp;".The fields which can be used in the template are:
        /// &#10;
        /// &#10;mobile — Boolean|String (default: false)
        /// &#10;If set to true and the scheduler is viewed on mobile browser it will use adaptive rendering.Can be set to a string phone or tablet which will force the widget to use adaptive rendering regardless of browser type.
        /// &#10;
        /// &#10;resources — Array 
        /// &#10;The configuration of the scheduler resource(s). A scheduler resource is optional metadata that can be associated
/// &#10;with a scheduler event.
        /// &#10;
        /// &#10;selectable — Boolean (default: false)
        /// &#10;If set to true the user would be able to select scheduler cells and events. By default selection is disabled.
        /// &#10;
        /// &#10;showWorkHours — Boolean (default: false)
        /// &#10;If set to true the view will be initially shown in business hours mode. By default view is displyed in full day mode.
        /// &#10;
        /// &#10;snap — Boolean (default: true)
        /// &#10;If set to true the scheduler will snap events to the nearest slot during dragging (resizing or moving). Set it to false to allow free moving and resizing of events.
        /// &#10;
        /// &#10;startTime — Date 
        /// &#10;The start time of the week and day views. The scheduler will display events starting after the startTime.
        /// &#10;
        /// &#10;timezone — String 
        /// &#10;The timezone which the scheduler will use to display the scheduler appointment dates. By default the current system timezone is used. This is an acceptable default when the
/// &#10;scheduler widget is bound to local array of events. It is advisable to specify a timezone if the scheduler is bound to a remote service.
/// &#10;That way all users would see the same dates and times no matter their configured system timezone.The complete list of the supported timezones is available in the List of IANA time zones Wikipedia page.
        /// &#10;
        /// &#10;views — Array 
        /// &#10;The views displayed by the scheduler and their configuration. The array items can be either objects specifying the view configuration or strings representing the view types (assuming default configuration).
/// &#10;By default the Kendo UI Scheduler widget displays "day" and "week" view.
        /// &#10;
        /// &#10;width — Number|String 
        /// &#10;The width of the widget. Numeric values are treated as pixels.
        /// &#10;
        /// &#10;workDayStart — Date 
        /// &#10;Sets the start of the work day when the  "Show business hours" button is clicked.
        /// &#10;
        /// &#10;workDayEnd — Date 
        /// &#10;Sets the end of the work day when the  "Show business hours" button is clicked.
        /// &#10;
        /// &#10;workWeekStart — Number (default: 1)
        /// &#10;The start of working week (index based).
        /// &#10;
        /// &#10;workWeekEnd — Number (default: 5)
        /// &#10;The end of working week (index based).
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Slider: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Slider</summary>
        /// </signature>
    }
});

kendo.ui.Slider = (function() {
var original = kendo.ui.Slider;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Slider for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enable/Disable the Slider widget.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the Slider.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of a Slider. It accepts a string or number as parameters and returns
/// a number representing the underlying value.
        /// </summary>
        /// <param name="value" type="Number" >_optional, default: _The value to be set for a Slider.</param>
        /// <returns type="Number">The value of the Slider.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoSlider = function() {
    this.data("kendoSlider", new kendo.ui.Slider());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSlider: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Slider widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Slider">The kendo.ui.Slider instance (if present).</returns>
        /// </signature>
    },
    kendoSlider: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Slider widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;decreaseButtonTitle — String (default: "Decrease")
        /// &#10;The title of the decrease button of the Slider.
        /// &#10;
        /// &#10;increaseButtonTitle — String (default: "Increase")
        /// &#10;The title of the increase button of the Slider.
        /// &#10;
        /// &#10;largeStep — Number (default: 5)
        /// &#10;The delta with which the value will change when the user presses the Page Up or Page Down key (the drag
/// &#10;handle must be focused). Note: The allied largeStep will also set large tick for every large step.
        /// &#10;
        /// &#10;max — Number (default: 10)
        /// &#10;The maximum value of the Slider.
        /// &#10;
        /// &#10;min — Number (default: 0)
        /// &#10;The minimum value of the Slider.
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;The orientation of a Slider: "horizontal" or "vertical".
        /// &#10;
        /// &#10;showButtons — Boolean (default: true)
        /// &#10;Can be used to show (true) or hide (false) the
/// &#10;increase and decrease buttons of a Slider.
        /// &#10;
        /// &#10;smallStep — Number (default: 1)
        /// &#10;The small step value of the Slider. The underlying value will be changed when the end user
/// &#10;(1) clicks on the increase or decrease buttons of the Slider, (2) presses the arrow keys
/// &#10;(the drag handle must be focused), or (3) drags the drag handle.
        /// &#10;
        /// &#10;tickPlacement — String (default: "both")
        /// &#10;Denotes the location of the tick marks in the Slider. The available options are:
        /// &#10;
        /// &#10;tooltip — Object 
        /// &#10;Configuration of the Slider tooltip.
        /// &#10;
        /// &#10;value — Number 
        /// &#10;The underlying value of the Slider.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Sortable: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Sortable</summary>
        /// </signature>
    }
});

kendo.ui.Sortable = (function() {
var original = kendo.ui.Sortable;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    indexOf: function(element) {
        /// <signature>
        /// <summary>
        /// Returns the index of specified item. Filtered items are excluded from the collection.
        /// </summary>
        /// <param name="element" type="jQuery" >jQuery object which represents the sortable element.</param>
        /// <returns type="Number">the index of specified item.</returns>
        /// </signature>
    },
    items: function() {
        /// <signature>
        /// <summary>
        /// Returns the sortable elements. Filtered items and the placeholder are excluded from the collection.
        /// </summary>
        /// <returns type="jQuery">the sortable items</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoSortable = function() {
    this.data("kendoSortable", new kendo.ui.Sortable());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSortable: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Sortable widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Sortable">The kendo.ui.Sortable instance (if present).</returns>
        /// </signature>
    },
    kendoSortable: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Sortable widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;axis — String (default: null)
        /// &#10;Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".
        /// &#10;
        /// &#10;container — String (default: null)
        /// &#10;Selector that determines the container to which boundaries the hint movement will be constrained.
        /// &#10;
        /// &#10;connectWith — String (default: null)
        /// &#10;Selector which determines if items from the current Sortable widget can be accepted from another Sortable container(s). The connectWith option describes one way relationship, if the developer wants a two way connection then the connectWith option should be set on both widgets.
        /// &#10;
        /// &#10;cursor — String (default: "auto")
        /// &#10;The cursor that will be shown while user drags sortable item.
        /// &#10;
        /// &#10;cursorOffset — Object 
        /// &#10;If set, specifies the offset of the hint relative to the mouse cursor/finger.
/// &#10;By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: top and left.
        /// &#10;
        /// &#10;disabled — String (default: null)
        /// &#10;Selector that determines which items are disabled. Disabled items cannot be dragged but are valid sort targets.
        /// &#10;
        /// &#10;filter — String (default: null)
        /// &#10;Selector that determines which items are sortable. Filtered items cannot be dragged and are not valid sort targets.
        /// &#10;
        /// &#10;handler — String (default: null)
        /// &#10;Selector that determines which element will be used as a draggable handler. If a handler is defined, the user will be able to move the Sortable items only if the cursor/finger is positioned onto the handler element.
        /// &#10;
        /// &#10;hint — Function|String 
        /// &#10;Provides a way for customization of the sortable item hint. If a function is supplied, it receives one argument - the draggable element's jQuery object.
/// &#10;If hint function is not provided the widget will clone dragged item and use it as a hint.
        /// &#10;
        /// &#10;holdToDrag — Boolean (default: false)
        /// &#10;Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture. When set to true, the item will be activated after the user taps and holds the finger on the element for a short amount of time.
/// &#10;The item will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately.
        /// &#10;
        /// &#10;placeholder — Function|String 
        /// &#10;Provides a way for customization of the sortable item placeholder. If a function is supplied, it receives one argument - the draggable element's jQuery object.
/// &#10;If placeholder function is not provided the widget will clone dragged item, remove its ID attribute, set its visibility to hidden and use it as a placeholder.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Splitter: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Splitter</summary>
        /// </signature>
    }
});

kendo.ui.Splitter = (function() {
var original = kendo.ui.Splitter;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    ajaxRequest: function(pane,url,data) {
        /// <signature>
        /// <summary>
        /// Loads the content of a pane from a local or remote URL.
        /// </summary>
        /// <param name="pane" type="Object" >The targeted pane whose content is to be loaded via a URL.</param>
        /// <param name="url" type="String" >A local or remote URL from which the content of the pane is to be loaded.</param>
        /// <param name="data" type="Object" >Any data that is necessary to be sent to the server.</param>
        /// </signature>
    },
    append: function(config) {
        /// <signature>
        /// <summary>
        /// Appends a new pane. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration</param>
        /// </signature>
    },
    collapse: function(pane) {
        /// <signature>
        /// <summary>
        /// Collapses a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger a collapse event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    expand: function(pane) {
        /// <signature>
        /// <summary>
        /// Expands a specified pane. Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger an expand event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be expanded.</param>
        /// </signature>
    },
    insertAfter: function(config,referencePane) {
        /// <signature>
        /// <summary>
        /// Inserts a new pane after the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane after which the new one will be inserted.</param>
        /// </signature>
    },
    insertBefore: function(config,referencePane) {
        /// <signature>
        /// <summary>
        /// Inserts a new pane before the specified one. The method returns the pane element, so it can be populated with arbitrary content, if contentUrl is not set.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="config" type="Object" >The new pane configuration.</param>
        /// <param name="referencePane" type="Object" >The existing pane before which the new one will be inserted.</param>
        /// </signature>
    },
    max: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Sets the maximum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The maximum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>
        /// </signature>
    },
    min: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Sets the minimum size of a pane. Setting this value will not cause the widget to redraw, nor will it trigger any events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane being targeted for a new minimum size configuration value.</param>
        /// <param name="value" type="String" >The minimum size value of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%").</param>
        /// </signature>
    },
    remove: function(pane) {
        /// <signature>
        /// <summary>
        /// Removes one or more panes. The method returns the Splitter instance.
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane(s) to be removed.</param>
        /// </signature>
    },
    size: function(pane,value) {
        /// <signature>
        /// <summary>
        /// Set the size of the pane. Setting this value will cause the widget to redraw and it will trigger the resize event.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be resized.</param>
        /// <param name="value" type="String" >The new size of the pane defined as pixels (i.e. "200px") or as a percentage (i.e. "50%"). Note: This value must not exceed panes.max or be less then panes.min.</param>
        /// </signature>
    },
    toggle: function(pane,expand) {
        /// <signature>
        /// <summary>
        /// Toggles the state of a specified pane (i.e. collapsed or expanded).
/// Invoking this method will force the widget to redraw and it will trigger the resize event.
/// Note: Invoking the method will not trigger collapse or expand events.
        /// </summary>
        /// <param name="pane" type="Object" >The pane to be collapsed.</param>
        /// <param name="expand" type="Boolean" >Represents the desired state of the specified pane; to be expanded (true) or collapsed (false). If undefined, toggle() will collapse the pane if it is expanded or will expand the pane if it is collapsed.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoSplitter = function() {
    this.data("kendoSplitter", new kendo.ui.Splitter());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoSplitter: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Splitter widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Splitter">The kendo.ui.Splitter instance (if present).</returns>
        /// </signature>
    },
    kendoSplitter: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Splitter widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;orientation — String (default: "horizontal")
        /// &#10;Specifies the orientation of the widget. Supported values are "horizontal" and "vertical".
        /// &#10;
        /// &#10;panes — Array 
        /// &#10;An array of pane definitions.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    TabStrip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TabStrip</summary>
        /// </signature>
    }
});

kendo.ui.TabStrip = (function() {
var original = kendo.ui.TabStrip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    activateTab: function(item) {
        /// <signature>
        /// <summary>
        /// Activates a tab specified as a selector. Note: Invoking this method will not trigger any events.
        /// </summary>
        /// <param name="item" type="jQuery" >The target tab, specified as a selector, to be activated.</param>
        /// </signature>
    },
    append: function(tab) {
        /// <signature>
        /// <summary>
        /// Appends a tab to the collection of tabs in a TabStrip.
        /// </summary>
        /// <param name="tab" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    contentElement: function(itemIndex) {
        /// <signature>
        /// <summary>
        /// Obtains the DOM element that encloses tab content by its tab index in the TabStrip.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element enclosing tab content by its tab index in the TabStrip.</returns>
        /// </signature>
    },
    contentHolder: function(itemIndex) {
        /// <signature>
        /// <summary>
        /// Obtains the DOM element that holds tab content by its tab index in the TabStrip.
/// The difference between contentElement and contentHolder is that contentHolder returns the DOM element that really holds the content, which on mobile is the scroll container.
        /// </summary>
        /// <param name="itemIndex" type="Number" >The index of the tab in the TabStrip.</param>
        /// <returns type="Element">The DOM element holding tab content by its tab index in the TabStrip.</returns>
        /// </signature>
    },
    deactivateTab: function(item) {
        /// <signature>
        /// <summary>
        /// Deactivates a tab specified as a selector. Note: Invoking this method will not trigger any events.
        /// </summary>
        /// <param name="item" type="jQuery" >The target tab, specified as a selector, to be deactivated.</param>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    disable: function(element) {
        /// <signature>
        /// <summary>
        /// Disables a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, to be disabled.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    enable: function(element,enable) {
        /// <signature>
        /// <summary>
        /// Disables (false) or enables (true) a tab(s) of a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, to be enabled (true) or disabled (false).</param>
        /// <param name="enable" type="Boolean" >Desired state of the tab(s) specified by the selector; enabled (true) or disabled (false).</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    insertAfter: function(item,referenceTab) {
        /// <signature>
        /// <summary>
        /// Inserts a newly-created tab after a specified tab.
        /// </summary>
        /// <param name="item" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Object" >A reference tab to insert the new item after.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    insertBefore: function(item,referenceTab) {
        /// <signature>
        /// <summary>
        /// Inserts a newly-created tab before a specified tab.
        /// </summary>
        /// <param name="item" type="Object" >Target tab, specified as a JSON object. You can pass tab text, content or contentUrl here. Can handle an HTML string or array of such strings or JSON.</param>
        /// <param name="referenceTab" type="Object" >A reference tab to insert the new item before</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    items: function() {
        /// <signature>
        /// <summary>
        /// Gets the list of DOM elements that represent the tabs.
        /// </summary>
        /// <returns type="HTMLCollection">the tabs as an HTML collection of elements.</returns>
        /// </signature>
    },
    reload: function(element) {
        /// <signature>
        /// <summary>
        /// Reloads TabStrip tab(s) via AJAX.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or jQuery object, to be reloaded via AJAX.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    remove: function(element) {
        /// <signature>
        /// <summary>
        /// Removes a specified tab from a TabStrip.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector or jQuery object, to be removed.</param>
        /// <returns type="kendo.ui.TabStrip">Returns the TabStrip object to support chaining.</returns>
        /// </signature>
    },
    select: function(element) {
        /// <signature>
        /// <summary>
        /// Get/set the selected tab. If called without arguments, it returns the
/// currently selected tab.
        /// </summary>
        /// <param name="element" type="Object" >The target tab(s), specified as a selector, jQuery object or index in the tab group.</param>
        /// <returns type="jQuery">the selected tab if called without arguments. kendo.ui.TabStrip if called with arguments.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoTabStrip = function() {
    this.data("kendoTabStrip", new kendo.ui.TabStrip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTabStrip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TabStrip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TabStrip">The kendo.ui.TabStrip instance (if present).</returns>
        /// </signature>
    },
    kendoTabStrip: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.TabStrip widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Boolean 
        /// &#10;A collection of visual animations used when TabStrip tab are selected through
/// &#10;user interactions. Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of visual animations used when TabStrip tab are selected through
/// &#10;user interactions. Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;collapsible — Boolean (default: false)
        /// &#10;Specifies whether the TabStrip should be able to collapse completely when clicking an expanded tab.
        /// &#10;
        /// &#10;contentUrls — Array 
        /// &#10;Sets an array with the URLs from which the tabs content to be loaded from. If only specific tabs should be loaded via Ajax, then you should set the URLs to the corresponding positions in the array and set the other elements to null.
        /// &#10;
        /// &#10;dataContentField — String (default: "")
        /// &#10;Sets the field of the data item that provides the text content of
/// &#10;the tab content element.
        /// &#10;
        /// &#10;dataContentUrlField — String (default: "")
        /// &#10;Sets the field of the data item that provides the URL for
/// &#10;the ajax loaded tab content.
        /// &#10;
        /// &#10;dataImageUrlField — String (default: "")
        /// &#10;Sets the field of the data item that provides the image URL of
/// &#10;the tab.
        /// &#10;
        /// &#10;dataSpriteCssClass — String (default: "")
        /// &#10;Sets the field of the data item that provides the CSS class of
/// &#10;the tab.
        /// &#10;
        /// &#10;dataTextField — String (default: "")
        /// &#10;Sets the field of the data item that provides the text name of the tab.
        /// &#10;
        /// &#10;dataUrlField — String (default: "")
        /// &#10;Sets the field of the data item that provides the link URL for the
/// &#10;tab.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    TimePicker: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TimePicker</summary>
        /// </signature>
    }
});

kendo.ui.TimePicker = (function() {
var original = kendo.ui.TimePicker;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes the drop-down list of a TimePicker.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the TimePicker for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables a TimePicker.
        /// </summary>
        /// <param name="enable" type="Boolean" >Enables (true or undefined) or disables (false) a TimePicker.</param>
        /// </signature>
    },
    readonly: function(readonly) {
        /// <signature>
        /// <summary>
        /// Toggles the readonly state of the widget. When the widget is readonly it doesn't allow user input.
        /// </summary>
        /// <param name="readonly" type="Boolean" >The argument, which defines whether the timepicker should be readonly or editable.</param>
        /// </signature>
    },
    max: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the maximum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The maximum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The maximum time value of a TimePicker.</returns>
        /// </signature>
    },
    min: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the minimum value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The minimum time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The minimum time value of a TimePicker.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens the drop-down list of a TimePicker.
        /// </summary>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Changes the initial TimePicker configuration. Will be included in Q3 2013 SP1. Currently available in Q3 2013 internal builds only.
        /// </summary>
        /// <param name="options" type="Object" >The new configuration options.</param>
        /// </signature>
    },
    value: function(value) {
        /// <signature>
        /// <summary>
        /// Gets or sets the value of the TimePicker.
        /// </summary>
        /// <param name="value" type="Object" >The time value to set for a TimePicker, expressed as a Date object or as a string.</param>
        /// <returns type="Date">The time value of a TimePicker.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoTimePicker = function() {
    this.data("kendoTimePicker", new kendo.ui.TimePicker());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTimePicker: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TimePicker widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TimePicker">The kendo.ui.TimePicker instance (if present).</returns>
        /// </signature>
    },
    kendoTimePicker: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.TimePicker widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;Configures the opening and closing animations of the popup. Setting the animation option to false will disable the opening and closing animations. As a result the popup will open and close instantly.
        /// &#10;
        /// &#10;culture — String (default: "en-US")
        /// &#10;Specifies the culture info used by the widget.
        /// &#10;
        /// &#10;dates — Array 
        /// &#10;Specifies a list of dates, which are shown in the time drop-down list. If not set, the TimePicker will auto-generate the available times.
        /// &#10;
        /// &#10;format — String (default: "h:mm tt")
        /// &#10;Specifies the format, which is used to format the value of the TimePicker displayed in the input. The format also will be used to parse the input.
        /// &#10;
        /// &#10;interval — Number (default: "30")
        /// &#10;Specifies the interval, between values in the popup list, in minutes.
        /// &#10;
        /// &#10;max — Date (default: "00:00")
        /// &#10;Specifies the end value in the popup list.
        /// &#10;
        /// &#10;min — Date (default: "00:00")
        /// &#10;Specifies the start value in the popup list.
        /// &#10;
        /// &#10;parseFormats — Array 
        /// &#10;Specifies the formats, which are used to parse the value set with the value method or by direct input. If not set the value of the options.format will be used. Note that value of the format option is always used.
        /// &#10;
        /// &#10;value — Date (default: null)
        /// &#10;Specifies the selected time.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Tooltip: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Tooltip</summary>
        /// </signature>
    }
});

kendo.ui.Tooltip = (function() {
var original = kendo.ui.Tooltip;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    show: function(element) {
        /// <signature>
        /// <summary>
        /// Shows the tooltip for given target.
        /// </summary>
        /// <param name="element" type="jQuery" >The target element for which the tooltip should be shown.</param>
        /// </signature>
    },
    hide: function() {
        /// <signature>
        /// <summary>
        /// Hides the tooltip.
        /// </summary>
        /// </signature>
    },
    refresh: function() {
        /// <signature>
        /// <summary>
        /// Refresh the tooltip content.
        /// </summary>
        /// </signature>
    },
    target: function() {
        /// <signature>
        /// <summary>
        /// Gets the tooltip current target.
        /// </summary>
        /// <returns type="jQuery">The target element or null.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoTooltip = function() {
    this.data("kendoTooltip", new kendo.ui.Tooltip());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTooltip: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Tooltip widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Tooltip">The kendo.ui.Tooltip instance (if present).</returns>
        /// </signature>
    },
    kendoTooltip: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Tooltip widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;autoHide — Boolean (default: true)
        /// &#10;Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of {Animation} objects, used to change default animations. A value of false
/// &#10;will disable all animations in the widget.
        /// &#10;
        /// &#10;content — String|Function 
        /// &#10;The text or a function which result will be shown within the tooltip.
/// &#10;By default the tooltip will display the target element title attribute content.
        /// &#10;
        /// &#10;content — Object 
        /// &#10;The text or a function which result will be shown within the tooltip.
/// &#10;By default the tooltip will display the target element title attribute content.
        /// &#10;
        /// &#10;callout — Boolean (default: true)
        /// &#10;Specifies if the tooltip callout will be displayed.
        /// &#10;
        /// &#10;filter — String 
        /// &#10;Specifies a selector for elements, within the container, for which the tooltip will be displayed.
        /// &#10;
        /// &#10;iframe — Boolean 
        /// &#10;Explicitly states whether content iframe should be created.
        /// &#10;
        /// &#10;height — Number (default: Infinity)
        /// &#10;The height (in pixels) of the tooltip.
        /// &#10;
        /// &#10;width — Number (default: Infinity)
        /// &#10;The width (in pixels) of the tooltip.
        /// &#10;
        /// &#10;position — String (default: "bottom")
        /// &#10;The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        /// &#10;
        /// &#10;showAfter — Number (default: 100)
        /// &#10;Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        /// &#10;
        /// &#10;showOn — String (default: "mouseenter")
        /// &#10;The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Touch: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Touch</summary>
        /// </signature>
    }
});

kendo.ui.Touch = (function() {
var original = kendo.ui.Touch;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    cancel: function() {
        /// <signature>
        /// <summary>
        /// Cancels the current touch event sequence. Calling cancel in a touchstart or dragmove will disable subsequent move or tap/end/hold event handlers from being called.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Touch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoTouch = function() {
    this.data("kendoTouch", new kendo.ui.Touch());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTouch: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Touch widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Touch">The kendo.ui.Touch instance (if present).</returns>
        /// </signature>
    },
    kendoTouch: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Touch widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;filter — String 
        /// &#10;jQuery selector that specifies child elements that are touchable if a widget is attached to a container.
        /// &#10;
        /// &#10;multiTouch — Boolean (default: false)
        /// &#10;If set to true, the widget will capture and trigger the gesturestart, gesturechange, and gestureend events when the user touches the element with two fingers.
        /// &#10;
        /// &#10;enableSwipe — Boolean (default: false)
        /// &#10;If set to true, the Touch widget will recognize horizontal swipes and trigger the swipe event.Notice: if the enableSwipe option is set to true, the dragstart, drag and dragend events will not be triggered.
        /// &#10;
        /// &#10;minXDelta — Number (default: 30)
        /// &#10;The minimum horizontal distance in pixels the user should swipe before the swipe event is triggered.
        /// &#10;
        /// &#10;maxYDelta — Number (default: 20)
        /// &#10;The maximum vertical deviation in pixels of the swipe event. Swipes with higher deviation are discarded.
        /// &#10;
        /// &#10;maxDuration — Number (default: 1000)
        /// &#10;The maximum amount of time in milliseconds the swipe event can last. Slower swipes are discarded.
        /// &#10;
        /// &#10;minHold — Number (default: 800)
        /// &#10;The timeout in milliseconds before the hold event is fired.Notice: the hold event will be triggered after the time passes, not after the user lifts his/hers finger.
        /// &#10;
        /// &#10;doubleTapTimeout — Number (default: 400)
        /// &#10;The maximum period (in milliseconds) between two consecutive taps which will trigger the doubletap event.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    TreeView: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.TreeView</summary>
        /// </signature>
    }
});

kendo.ui.TreeView = (function() {
var original = kendo.ui.TreeView;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    append: function(nodeData,parentNode,success) {
        /// <signature>
        /// <summary>
        /// Appends a node to any level of the treeview. This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be appended. If the argument is a plain JavaScript object, a new item will be created. If the argument is a jQuery element that holds a node, the treeview node will be moved. If the argument is an array of objects, each item of the array will be appended.</param>
        /// <param name="parentNode" type="jQuery" >The node that will contain the newly appended node. If not specified, the new node will be appended to the root group of the TreeView.</param>
        /// <param name="success" type="Function" >A success callback that will be called once the new node has been appended. Useful in the case of remote binding where an item is appended to an unfetched node. The callback is called once the siblings have been fetched.</param>
        /// <returns type="jQuery">The inserted <li> element, wrapped in a jQuery object,or null if the new model has not been inserted immediately.</returns>
        /// </signature>
    },
    collapse: function(nodes) {
        /// <signature>
        /// <summary>
        /// Collapses nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that will be collapsed.</param>
        /// </signature>
    },
    dataItem: function(node) {
        /// <signature>
        /// <summary>
        /// Returns the data item to which the specified node is bound.
        /// </summary>
        /// <param name="node" type="Object" >A string, DOM element or jQuery object which represents the node. A string is treated as a jQuery selector.</param>
        /// <returns type="kendo.data.Node">The model of the item that was passed as a parameter.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    detach: function(node) {
        /// <signature>
        /// <summary>
        /// Removes a node from a TreeView, but keeps its jQuery.data() objects.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be detached.</param>
        /// <returns type="jQuery">The node that has been detached.</returns>
        /// </signature>
    },
    enable: function(nodes,enable) {
        /// <signature>
        /// <summary>
        /// Enables or disables nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be enabled/disabled.</param>
        /// <param name="enable" type="Boolean" >Whether the nodes should be enabled or disabled.</param>
        /// </signature>
    },
    expand: function(nodes) {
        /// <signature>
        /// <summary>
        /// Expands collapsed nodes.
        /// </summary>
        /// <param name="nodes" type="Object" >The nodes that are to be expanded.</param>
        /// </signature>
    },
    findByText: function(text) {
        /// <signature>
        /// <summary>
        /// Searches for a node that has specific text.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>
        /// </signature>
    },
    findByUid: function(text) {
        /// <signature>
        /// <summary>
        /// Searches for a node with the given unique identifier.
/// Applicable when the widget is bound to a HierarchicalDataSource.
/// If you want to find a node by its id, use the dataSource.get() method and supply its uid to the findByUid method.
        /// </summary>
        /// <param name="text" type="String" >The text that is being searched for.</param>
        /// <returns type="jQuery">All nodes that have the text.</returns>
        /// </signature>
    },
    insertAfter: function(nodeData,referenceNode) {
        /// <signature>
        /// <summary>
        /// Inserts a node after a specified node.
/// This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that will precede the newly-appended node.</param>
        /// </signature>
    },
    insertBefore: function(nodeData,referenceNode) {
        /// <signature>
        /// <summary>
        /// Inserts a node before another node. This method may also be used to reorder nodes.
        /// </summary>
        /// <param name="nodeData" type="Object" >A JSON-formatted string or selector that specifies the node to be inserted.</param>
        /// <param name="referenceNode" type="jQuery" >The node that follows the inserted node.</param>
        /// </signature>
    },
    parent: function(node) {
        /// <signature>
        /// <summary>
        /// Gets the parent node of the item
        /// </summary>
        /// <param name="node" type="Object" >The child node whose parent will be returned.</param>
        /// <returns type="jQuery">The parent node of the given parameter node.</returns>
        /// </signature>
    },
    remove: function(node) {
        /// <signature>
        /// <summary>
        /// Removes a node from the widget.
        /// </summary>
        /// <param name="node" type="Object" >The node that is to be removed.</param>
        /// </signature>
    },
    select: function(node) {
        /// <signature>
        /// <summary>
        /// Gets or sets the selected node.
        /// </summary>
        /// <param name="node" type="Object" >If provided, the node that should be selected.</param>
        /// <returns type="jQuery">The currently selected node.</returns>
        /// </signature>
    },
    setDataSource: function(dataSource) {
        /// <signature>
        /// <summary>
        /// Sets and binds a dataSource to the widget.
        /// </summary>
        /// <param name="dataSource" type="kendo.data.HierarchicalDataSource" >The new dataSource that the widget will bind to</param>
        /// </signature>
    },
    text: function(node,newText) {
        /// <signature>
        /// <summary>
        /// Gets or sets the text of a node in a TreeView.
        /// </summary>
        /// <param name="node" type="Object" >The node of which the text is being retrieved or set.</param>
        /// <param name="newText" type="String" >Optional. When passed, sets the node text to the specified string</param>
        /// <returns type="String">The text of a node.</returns>
        /// </signature>
    },
    toggle: function(node) {
        /// <signature>
        /// <summary>
        /// Toggles the node of a TreeView between its expanded and collapsed states.
        /// </summary>
        /// <param name="node" type="Object" >The node that should be toggled.</param>
        /// </signature>
    },
    updateIndeterminate: function(node) {
        /// <signature>
        /// <summary>
        /// Updates the indeterminate state of the treeview checkboxes. Should be used for better performance when checking multiple checkboxes through code.
        /// </summary>
        /// <param name="node" type="jQuery" >Optional. The root of the hierarchy that will be looped through. Allows only a subtree to be processed. The default value is the treeview root.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoTreeView = function() {
    this.data("kendoTreeView", new kendo.ui.TreeView());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoTreeView: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.TreeView widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.TreeView">The kendo.ui.TreeView instance (if present).</returns>
        /// </signature>
    },
    kendoTreeView: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.TreeView widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;animation — Boolean 
        /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of visual animations used when items are expanded or collapsed through user interaction.
/// &#10;Setting this option to false will disable all animations.
        /// &#10;
        /// &#10;autoBind — Boolean (default: true)
        /// &#10;If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
/// &#10;data source is fired. By default the widget will bind to the data source specified in the configuration.
        /// &#10;
        /// &#10;checkboxes — Boolean 
        /// &#10;If true or an object, renders checkboxes beside each node.
        /// &#10;
        /// &#10;checkboxes — Object 
        /// &#10;If true or an object, renders checkboxes beside each node.
        /// &#10;
        /// &#10;dataImageUrlField — String (default: null)
        /// &#10;Sets the field of the data item that provides the image URL of the treeview nodes.
        /// &#10;
        /// &#10;dataSource — Object|Array 
        /// &#10;The data source of the widget which is used render nodes. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.HierarchicalDataSource instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.HierarchicalDataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.HierarchicalDataSource instance the widget will use that instance and will not initialize a new one.
        /// &#10;
        /// &#10;dataSpriteCssClassField — String (default: null)
        /// &#10;Sets the field of the data item that provides the sprite CSS class of the nodes.
/// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
        /// &#10;
        /// &#10;dataTextField — String|Array (default: null)
        /// &#10;Sets the field of the data item that provides the text content of the nodes.
/// &#10;If an array, each level uses the field that is at the same index in the array, or the last item in the array.
        /// &#10;
        /// &#10;dataUrlField — String (default: null)
        /// &#10;Sets the field of the data item that provides the link URL of the nodes.
        /// &#10;
        /// &#10;dragAndDrop — Boolean (default: false)
        /// &#10;Disables (false) or enables (true) drag-and-drop of the nodes.
        /// &#10;
        /// &#10;loadOnDemand — Boolean (default: true)
        /// &#10;Indicates whether the child datasources should be fetched lazily when parent groups get expanded.
/// &#10;Setting this to false causes all child dataSources to be loaded at initialization time.
/// &#10;Note: when initializing the widget from an array (rather than from a HierarchicalDataSource instance), this option defaults to false, rather than true.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;The text messages displayed in the widget. Use it to customize or localize the messages.
        /// &#10;
        /// &#10;template — String|Function 
        /// &#10;Template for rendering each node.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Upload: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Upload</summary>
        /// </signature>
    }
});

kendo.ui.Upload = (function() {
var original = kendo.ui.Upload;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the Upload for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    disable: function() {
        /// <signature>
        /// <summary>
        /// Disables the upload.
        /// </summary>
        /// </signature>
    },
    enable: function(enable) {
        /// <signature>
        /// <summary>
        /// Enables the upload.
        /// </summary>
        /// <param name="enable" type="Boolean" >The argument, which defines whether to enable/disable the upload.</param>
        /// </signature>
    },
    toggle: function(enable) {
        /// <signature>
        /// <summary>
        /// Toggles the upload enabled state.
        /// </summary>
        /// <param name="enable" type="Boolean" >(Optional) The new enabled state.</param>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoUpload = function() {
    this.data("kendoUpload", new kendo.ui.Upload());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoUpload: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Upload widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Upload">The kendo.ui.Upload instance (if present).</returns>
        /// </signature>
    },
    kendoUpload: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Upload widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;async — Object 
        /// &#10;Configures the ability to upload a file(s) in an asynchronous manner. Please refer to the
/// &#10;async mode help topic
/// &#10;for more details.
        /// &#10;
        /// &#10;enabled — Boolean (default: true)
        /// &#10;Enables (true) or disables (false) an Upload. A disabled
/// &#10;Upload may be re-enabled via enable().
        /// &#10;
        /// &#10;files — Array 
        /// &#10;List of files to be initially rendered in the Upload widget files list.
        /// &#10;
        /// &#10;localization — Object 
        /// &#10;Sets the strings rendered by the Upload.
        /// &#10;
        /// &#10;multiple — Boolean (default: true)
        /// &#10;Enables (true) or disables (false) the ability to select multiple files.
/// &#10;If false, users will be able to select only one file at a time. Note: This option does not
/// &#10;limit the total number of uploaded files in an asynchronous configuration.
        /// &#10;
        /// &#10;showFileList — Boolean (default: true)
        /// &#10;Enables (true) or disables (false) the ability to display a file listing
/// &#10;for uploading a file(s). Disabling a file listing may be useful you wish to customize the UI; use the
/// &#10;client-side events to build your own UI.
        /// &#10;
        /// &#10;template — String|Function 
        /// &#10;The template used to render the files in the list
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Validator: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Validator</summary>
        /// </signature>
    }
});

kendo.ui.Validator = (function() {
var original = kendo.ui.Validator;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    errors: function() {
        /// <signature>
        /// <summary>
        /// Get the error messages if any.
        /// </summary>
        /// <returns type="Array">Messages for the failed validation rules.</returns>
        /// </signature>
    },
    hideMessages: function() {
        /// <signature>
        /// <summary>
        /// Hides the validation messages.
        /// </summary>
        /// </signature>
    },
    validate: function() {
        /// <signature>
        /// <summary>
        /// Validates the input element(s) against the declared validation rules.
        /// </summary>
        /// <returns type="Boolean">true if all validation rules passed successfully.Note that if a HTML form element is set as validation container, the form submits will be automatically prevented if validation fails.</returns>
        /// </signature>
    },
    validateInput: function(input) {
        /// <signature>
        /// <summary>
        /// Validates the input element against the declared validation rules.
        /// </summary>
        /// <param name="input" type="Object" >Input element to be validated.</param>
        /// <returns type="Boolean">true if all validation rules passed successfully.</returns>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoValidator = function() {
    this.data("kendoValidator", new kendo.ui.Validator());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoValidator: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Validator widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Validator">The kendo.ui.Validator instance (if present).</returns>
        /// </signature>
    },
    kendoValidator: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Validator widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;errorTemplate — String 
        /// &#10;The template which renders the validation message.
        /// &#10;
        /// &#10;messages — Object 
        /// &#10;Set of messages (either strings or functions) which will be shown when given validation rule fails.
/// &#10;By setting already existing key the appropriate built-in message will be overridden.
        /// &#10;
        /// &#10;rules — Object 
        /// &#10;Set of custom validation rules. Those rules will extend the built-in ones.
        /// &#10;
        /// &#10;validateOnBlur — Boolean 
        /// &#10;Determines if validation will be triggered when element loses focus. Default value is true.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Widget: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Widget</summary>
        /// </signature>
    }
});

kendo.ui.Widget = (function() {
var original = kendo.ui.Widget;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    bind: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. Examples and more info can be found in the bind section of the kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        /// </summary>
        /// </signature>
    },
    one: function() {
        /// <signature>
        /// <summary>
        /// Attaches a handler to an event. The handler is executed only once. Examples and more info can be found in the one section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    trigger: function() {
        /// <signature>
        /// <summary>
        /// Executes all handlers attached to the given event. More info can be found in the trigger section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    },
    unbind: function() {
        /// <signature>
        /// <summary>
        /// Remove a previously attached event handler. More info can be found in the unbind section of the
/// kendo.Observable API reference.
        /// </summary>
        /// </signature>
    }



});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoWidget = function() {
    this.data("kendoWidget", new kendo.ui.Widget());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoWidget: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Widget widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Widget">The kendo.ui.Widget instance (if present).</returns>
        /// </signature>
    },
    kendoWidget: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Widget widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});

intellisense.annotate(kendo.ui, {
    Window: function() {
        /// <signature>
        /// <summary>Constructor of kendo.ui.Window</summary>
        /// </signature>
    }
});

kendo.ui.Window = (function() {
var original = kendo.ui.Window;
var wrapper = function() {
var instance = new original();
intellisense.annotate(instance, {
    center: function() {
        /// <signature>
        /// <summary>
        /// Centers the window within the viewport.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    close: function() {
        /// <signature>
        /// <summary>
        /// Closes a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    content: function(content) {
        /// <signature>
        /// <summary>
        /// Gets or set the content of a window.
        /// </summary>
        /// <param name="content" type="String" >The content of the Window.</param>
        /// <returns type="kendo.ui.Window">If the content parameter is provided, this method will return the widget object to support chaining. Otherwise, it will return the current content of the widget.</returns>
        /// </signature>
    },
    destroy: function() {
        /// <signature>
        /// <summary>
        /// Destroys the window and its modal overlay, if necessary. Removes the widget HTML elements from the DOM.
        /// </summary>
        /// </signature>
    },
    maximize: function() {
        /// <signature>
        /// <summary>
        /// Maximizes a Window to the entire viewing area of the user agent. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    minimize: function() {
        /// <signature>
        /// <summary>
        /// Maximizes a Window to its title bar.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    open: function() {
        /// <signature>
        /// <summary>
        /// Opens a Window.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    pin: function() {
        /// <signature>
        /// <summary>
        /// Pins the Window at its current position with a position:fixed style, i.e. the widget stops moving together with the other page content when the page is scrolled.
/// The user will still be able to move the Window with the mouse or keyboard.
        /// </summary>
        /// </signature>
    },
    refresh: function(options) {
        /// <signature>
        /// <summary>
        /// Refreshes the content of a Window from a remote URL or the initially defined content template.
/// Note that passing data and non-GET requests cannot be sent to an iframe, as they require a form with a target attribute.
        /// </summary>
        /// <param name="options" type="String" >Options for requesting data from the server. If omitted, the window uses the content property that was supplied when the window was created. Any options specified here are passed to jQuery.ajax().</param>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    restore: function() {
        /// <signature>
        /// <summary>
        /// Restores a maximized or minimized Window to its previous state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    setOptions: function(options) {
        /// <signature>
        /// <summary>
        /// Allows the window to be configured with new options.
        /// </summary>
        /// <param name="options" type="Object" >The configuration options to be set.</param>
        /// </signature>
    },
    title: function(text) {
        /// <signature>
        /// <summary>
        /// Gets or set the title of a Window.
        /// </summary>
        /// <param name="text" type="String" >The title of the Window.</param>
        /// <returns type="kendo.ui.Window">If a title is provided, this method will return the window object to support chaining. Otherwise, it will return the current title of the window.</returns>
        /// </signature>
    },
    toFront: function() {
        /// <signature>
        /// <summary>
        /// Brings forward a Window to the top of the z-index.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    toggleMaximization: function() {
        /// <signature>
        /// <summary>
        /// Toggles a Window between a maximized and restored state. Triggers the resize event.
        /// </summary>
        /// <returns type="kendo.ui.Window">Returns the window object to support chaining.</returns>
        /// </signature>
    },
    unpin: function() {
        /// <signature>
        /// <summary>
        /// Disables the Window's pinned state, so that the widget will move together with the other page content when the page is scrolled.
        /// </summary>
        /// </signature>
    },

    bind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Binds to a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be executed when the event is triggered.</param>
        /// </signature>
    },

    unbind: function(event, callback) {
        /// <signature>
        /// <summary>
        /// Unbinds a callback from a widget event.
        /// </summary>
        /// <param name="event" type="String">The event name</param>
        /// <param name="callback" type="Function">The callback to be removed.</param>
        /// </signature>
    }

});

return instance;

};

intellisense.redirectDefinition(wrapper, original);

return wrapper;

})();


jQuery.fn.kendoWindow = function() {
    this.data("kendoWindow", new kendo.ui.Window());

    return this;
};

intellisense.annotate(jQuery.fn, {
    getKendoWindow: function() {
        /// <signature>
        /// <summary>
        /// Returns a reference to the kendo.ui.Window widget, instantiated on the selector.
        /// </summary>
        /// <returns type="kendo.ui.Window">The kendo.ui.Window instance (if present).</returns>
        /// </signature>
    },
    kendoWindow: function(options) {
        /// <signature>
        /// <summary>
        /// Instantiates a kendo.ui.Window widget based the DOM elements that match the selector.
        /// &#10;Accepts an object with the following configuration options:
        /// &#10;
        /// &#10;actions — Array (default: ["Close"])
        /// &#10;The buttons for interacting with the window. Predefined array values are "Close", "Refresh", "Minimize",
/// &#10;and "Maximize".
        /// &#10;
        /// &#10;animation — Object 
        /// &#10;A collection of {Animation} objects, used to change default animations. A value of false
/// &#10;will disable all animations in the widget.
        /// &#10;
        /// &#10;appendTo — Object|String (default: document.body)
        /// &#10;The element that the Window will be appended to. Beneficial if the Window is used together with a form.
/// &#10;Note that this does not constrain the window dragging within the given element.
        /// &#10;
        /// &#10;content — String 
        /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
/// &#10;a container iframe element is automatically created. This behavior may change in future
/// &#10;versions, so it is advisable to always use the iframe configuration option.
        /// &#10;
        /// &#10;content — Object 
        /// &#10;Specifies a URL or request options that the window should load its content from.Note: For URLs starting with a protocol (e.g. http://),
/// &#10;a container iframe element is automatically created. This behavior may change in future
/// &#10;versions, so it is advisable to always use the iframe configuration option.
        /// &#10;
        /// &#10;draggable — Boolean (default: true)
        /// &#10;Enables (true) or disables (false) the ability for users to move/drag the widget.
        /// &#10;
        /// &#10;iframe — Boolean 
        /// &#10;Explicitly states whether content iframe should be created.
        /// &#10;
        /// &#10;maxHeight — Number (default: Infinity)
        /// &#10;The maximum height (in pixels) that may be achieved by resizing the window.
        /// &#10;
        /// &#10;maxWidth — Number (default: Infinity)
        /// &#10;The maximum width (in pixels) that may be achieved by resizing the window.
        /// &#10;
        /// &#10;minHeight — Number (default: 50)
        /// &#10;The minimum height (in pixels) that may be achieved by resizing the window.
        /// &#10;
        /// &#10;minWidth — Number (default: 50)
        /// &#10;The minimum width (in pixels) that may be achieved by resizing the window.
        /// &#10;
        /// &#10;modal — Boolean (default: false)
        /// &#10;Specifies whether the window should show a modal overlay over the page.
        /// &#10;
        /// &#10;pinned — Boolean (default: false)
        /// &#10;Specifies whether the window should be pinned, i.e. it will not move together with the page content during scrolling.
        /// &#10;
        /// &#10;position — Object 
        /// &#10;A collection of one or two members, which define the initial Window's top and/or left position on the page.
        /// &#10;
        /// &#10;resizable — Boolean (default: true)
        /// &#10;Enables (true) or disables (false) the ability for users to resize a Window.
        /// &#10;
        /// &#10;title — String|Boolean (default: "")
        /// &#10;The text in the window title bar. If false, the window will be displayed without a title bar. Note that this will prevent the window from being dragged, and the window titlebar buttons will not be shown.
        /// &#10;
        /// &#10;visible — Boolean (default: true)
        /// &#10;Specifies whether the window will be initially visible.
        /// &#10;
        /// &#10;width — Number|String 
        /// &#10;Specifies width of the window.
        /// &#10;
        /// &#10;height — Number|String 
        /// &#10;Specifies height of the window.
        /// &#10;
        /// </summary>
        /// <param name="options" type="Object">
        /// The widget configuration options
        /// </param>
        /// </signature>
    }
});
