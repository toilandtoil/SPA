/*
 * spa.chat.js
 * Chat feature module for SPA
 */

/*global $, spa, getComputedStyle */
spa.chat = (function () {
    //---------------- BEGIN MODULE SCOPE VARIABLES --------------
    var
    configMap = {
        main_html: String() + '<div class="spa-chat">' + '<div class="spa-chat-head">' + '<div class="spa-chat-head-toggle">+</div>' + '<div class="spa-chat-head-title">' + 'Chat' + '</div>' + '</div>' + '<div class="spa-chat-closer">x</div>' + '<div class="spa-chat-sizer">' + '<div class="spa-chat-msgs"></div>' + '<div class="spa-chat-box">' + '<input type="text"/>' + '<div>send</div>' + '</div>' + '</div>' + '</div>',

        settable_map: {
            slider_open_time: true,
            slider_close_time: true,
            slider_opened_em: true,
            slider_closed_em: true,
            slider_opened_title: true,
            slider_closed_title: true,
            chat_model: true,
            people_model: true,
            set_chat_anchor: true
        },
        slider_open_time: 250,
        slider_close_time: 250,
        slider_opened_em: 16,
        slider_closed_em: 2,
        slider_opened_title: 'Click to close',
        slider_closed_title: 'Click to open',
        chat_model: null,
        people_model: null,
        set_chat_anchor: null
    },
        stateMap = {
            $append_target: null,
            position_type: 'closed',
            px_per_em: 0,
            slider_hidden_px: 0,
            slider_closed_px: 0,
            slider_opened_px: 0
        },
        jqueryMap = {},
        setJqueryMap, configModule, initModule;
    //----------------- END MODULE SCOPE VARIABLES ---------------

    //------------------- BEGIN UTILITY METHODS ------------------
    //-------------------- END UTILITY METHODS -------------------

    //--------------------- BEGIN DOM METHODS --------------------
    // Begin DOM method /setJqueryMap/
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $container: $container
        };
    };
    // End DOM method /setJqueryMap/
    //---------------------- END DOM METHODS ---------------------

    //------------------- BEGIN EVENT HANDLERS -------------------
    //-------------------- END EVENT HANDLERS --------------------

    //------------------- BEGIN PUBLIC METHODS -------------------
    // Begin public method /configModule/
    // Example : spa.chat.configModule({ slider_open_em : 18 });
    // Purpose : Configure the module prior to initialization
    // Arguments :
    // * set_chat_anchor - a callback to modify the URI anchor to
    // indicate opened or closed state. This callback must return
    // false if the requested state cannot be met
    // * chat_model - the chat model object provides methods
    // to interact with our instant messaging
    // * people_model - the people model object which provides
    // methods to manage the list of people the model maintains
    // * slider_* settings. All these are optional scalars.
    // See mapConfig.settable_map for a full list
    // Example: slider_open_em is the open height in em's
    // Action :
    // The internal configuration data structure (configMap) is
    // updated with provided arguments. No other actions are taken.
    // Returns : true
    // Throws : JavaScript error object and stack trace on
    // unacceptable or missing arguments
    //
    configModule = function (input_map) {
        spa.util.setConfigMap({
            input_map: input_map,
            settable_map: configMap.settable_map,
            config_map: configMap
        });
        return true;
    };
    // End public method /configModule/


    // Begin callback method /setChatAnchor/
    // Example : setChatAnchor( 'closed' );
    // Purpose : Change the chat component of the anchor
    // Arguments:
    // * position_type - may be 'closed' or 'opened'
    // Action :
    // Changes the URI anchor parameter 'chat' to the requested
    // value if possible.
    // Returns :
    // * true - requested anchor part was updated
    // * false - requested anchor part was not updated
    // Throws : none
    //





    // Begin public method /initModule/
    // Example : spa.chat.initModule( $('#div_id') );
    // Purpose :
    // Directs Chat to offer its capability to the user
    // Arguments :
    // * $append_target (example: $('#div_id')).
    // A jQuery collection that should represent
    // a single DOM container
    // Action :
    // Appends the chat slider to the provided container and fills
    // it with HTML content. It then initializes elements,
    // events, and handlers to provide the user with a chat-room
    // interface
    // Returns : true on success, false on failure
    // Throws : none
    //
    initModule = function ($container) {
        // fill the chat slider container with our HTML tempate
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    };
    // End public method /initModule/

    // Begin public method /setSliderPosition/
    //
    // Example : spa.chat.setSliderPosition( 'closed' );
    // Purpose : Ensure chat slider is in the requested state
    // Arguments:
    // * position_type - enum('closed', 'opened', or 'hidden')
    // * callback - optional callback at end of animation.
    // (callback receives slider DOM element as argument)
    // Action :
    // Leaves slider in current state if it matches requested,
    // otherwise animate to requested state.
    // Returns :
    // * true - requested state achieved
    // * false - requested state not achieved
    // Throws : none
    //

    // return public methods
    return {
        configModule: configModule,
        initModule: initModule
    };
    //------------------- END PUBLIC METHODS ---------------------
}());