import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-media-query/iron-media-query.js';

class LibraryHoursWeek extends PolymerElement {
    static get template(){
        return html`
        <style>
          :host {
            display: block;
            background-color: transparent;
            padding: 0px;
            min-width: 320px;
          }

          h2 {
              margin-top: 0px;
          }
          .hours-table{
              border-top: 3px solid #d8d8d8;
              border-bottom: 3px solid #d8d8d8;
              border-collapse: collapse;
              margin-bottom: 0px;
              width: 100%;
              display: table;
          }

          .hours-tr {
              background-color: transparent;
              border: none;
              display:table-row;
          }

          .hours-td {
              border-bottom: none;
              padding-left: 4px;
              padding-right: 4px;
              padding-bottom: 8px;
              word-wrap: normal;
              font-size: 15px;
              display: table-cell;
              vertical-align: middle;
          }

          .hours-th {
              padding-top: 14px;
              display: table-cell;
              vertical-align: middle;
              text-align: center;
          }

          .hours-th.is-today{
              border-top: 3px solid #DAAA00;
              border-right: 3px solid #DAAA00;
              border-left: 3px solid #DAAA00;
          }

          .hours-td.is-today{
              border-right: 3px solid #DAAA00;
              border-left: 3px solid #DAAA00;
          }


          a {
              color: #002655;
          }
          img {
              width: 25px;
          }
          .closed {
              color:#ba0c2f;
              text-align: center;
              font-weight: 600;
              width: 11%;
          }
          .open {
              text-align: center;
              width: 11%;
          }

          th.is-today{
              border-top: 3px solid #DAAA00;
          }

          .keep-together{
              white-space: nowrap;
          }
          .th-head{
              font-weight: 600;
              color: #002655;
          }
          .th-sub{
              color: #797979;
              font-size: 13px;
              font-weight: 200;
          }
          .status-icon{
              padding-right: 8px;
              padding-left: 8px;
          }
            .lib-titles{
                display:flex;
                align-items:center;
                font-weight: 600;
                text-decoration: none;

            }
            .dept-titles{
                display:flex;
                align-items:center;
                font-weight: 200;
            }
            #month_container {

                width: 100%;
                height: 260px;
                text-align: center;

            }
            #month_0, #month_1, #month_2 {
                display: inline-block;
                width: 250px;
                height: 250px;
                background-color: #fff;
            }
            .month_nav {
                display: inline-block;
                height: 100%;
                vertical-align: top;
                padding-top: 125px;


            }
            #month_container .title {
                color: #797979;
                font-size: 13px;
                display: block;
                font-weight: 200;
                margin-top: 10px;
                margin-bottom: none;
            }
            #month_container .col-header{

                font-weight: 900;
                display: inline-block;
                width: 30px;
                height: 30px;
                font-size: 10px;
            }
            .cal-row{
                width: 100%;
                text-align: center;
                margin-top: 2px;
                margin-bottom: 2px;
            }
            .cal-day {
                display: inline-block;
                vertical-align: middle;
                width: 30px;
                height: 26px;
                font-size: 10px;
                cursor: pointer;
                align-items: center;


            }
            .day-text {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
            #month_container .previous, .next {
                color: #797979;
            }
            #month_container .current {
                font-weight: 150;
            }

            #month_container .is_exception {
                background-image: url("https://drive.google.com/uc?id=1VxB6X0r5UWaigjQZh9E_GG47Yhn2PQTW");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .selected_day {
                background-image: url("https://drive.google.com/uc?id=19Z0p9iolwPXnuqMCXINlENgGIbqd2VZC");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .cal-day-today {
                background-image: url("https://drive.google.com/uc?id=1svSqs2ToLv4DypkqUGZdBgeRA6h-pEL2");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .selected_day.cal-day-today  {
                background-image: url("https://drive.google.com/uc?id=1svSqs2ToLv4DypkqUGZdBgeRA6h-pEL2");
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }

            .selected_day.is_exception  {
                background-image: url("https://drive.google.com/uc?id=19Z0p9iolwPXnuqMCXINlENgGIbqd2VZC"), url("https://drive.google.com/uc?id=1VxB6X0r5UWaigjQZh9E_GG47Yhn2PQTW") !important;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .cal-day-today.is_exception {
                background-image: url("https://drive.google.com/uc?id=1svSqs2ToLv4DypkqUGZdBgeRA6h-pEL2"), url("https://drive.google.com/uc?id=1VxB6X0r5UWaigjQZh9E_GG47Yhn2PQTW") !important;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
            .legend-item {
                display:flex;
                align-items:center;
                margin-top: 6px;
                margin-bottom: 6px;
            }

            #legend-container {
                background-color: #fff;
                width: 410px;
                min-height: 35px;
                margin: auto;
                margin-bottom: 10px;
                margin-top: 10px;
            }
            .legend-icon {
                padding-right: 8px;
                width: 20px;
            }
            .legend-item-container{
                display: inline-block;
                margin-left: 5px;
                margin-right: 5px;

            }

        @media(min-width: 1000px){
            #view_tablet {
                display:none;
            }
            #view_desktop {
                display:block;
            }
            #view_mobile {
                display:none;
            }


            .hours-td {
                border-top: 1px solid #d8d8d8;
                border-left: none;
                border-right: none;
                padding-top: 8px;
            }

            .hours-th {
                padding-bottom: 14px;
            }

            .hours-td:nth-child(odd), .hours-th:nth-child(odd) {
              background-color: #fff;
          }
          .hours-td:nth-child(even), .hours-th:nth-child(even) {
                background-color: #f3f3f3;
            }

            .hours-tr:nth-last-child(2) .hours-td.is-today {
                border-bottom: 3px solid #DAAA00;
            }
            .hours-td {
                padding-bottom: 14px;
            }

            #month_0 .next.cal-day {
                pointer-events: none;
                background-image: none !important;
            }
            #month_0 .next.day-text {
                display: none;
            }

            #month_0 .previous.day-text {
                display: block;
            }
            #month_0 .previous.cal-text {
                pointer-events: all;
            }

            #month_1 .next.day-text, .previous.day-text {
                display: none;

            }
            #month_1 .next.cal-day, .previous.cal-day {
                pointer-events: none;
                background-image: none !important;

            }

            #month_2 .previous.day-text {
                display: none;
                background-image: none !important;

            }
            #month_2 .previous.cal-day {
                pointer-events: none;
                background-image: none !important;

            }


        }
        @media(max-width: 1000px){
            #view_tablet {
                display:block;
            }
            #view_desktop {
                display:none;
            }
            #view_mobile {
                display:none;
            }

            #month_2 {
                display: none;
            }

            #month_0 .next.day-text {
                display: none;
            }

            #month_0 .next.cal-day {
                pointer-events: none;
                background-image: none !important;
            }
            #month_1 .previous.day-text {
                display: none;
            }
            #month_1 .previous.cal-day {
                pointer-events: none;
                background-image: none !important;
            }


            .hours-td, .hours-th {
                background-color: #fff;
                border-left: 1px solid #d8d8d8;
                border-right: 1px solid #d8d8d8;
                border-top: none;
                border-bottom: none;

            }
            .hours-th {
                padding-bottom: none;
            }
            .hours-td {
                padding-top: 4px;
            }
            a {
                padding-top: 12px;
                padding-bottom: 12px;
            }
            .hours-table {
                border-left: none;
                border-right: none;
                border-top: 1px solid #d8d8d8;
                border-bottom: 2px solid #d8d8d8;
            }

            .hours-table[hidden] {
                display:none;
            }
            .hours-tr:nth-last-child(1) .hours-td.is-today {
                border-bottom: 3px solid #DAAA00;
            }
        }

        @media(max-width: 700px){
            #view_tablet {
                display:none;
            }
            #view_desktop {
                display:none;
            }
            #view_mobile {
                display:block;
                min-width: 300px;
            }
            #month_1 {
                display: none;
            }
            #month_2 {
                display: none;
            }

            #month_0 .next.day-text {
                display: block;
            }

            .hours-td {
                background-color: #fff;
                border-left: none;
                border-right: none;
            }
            .hours-tr.is-today {
                border-bottom: 3px solid #DAAA00;
                border-top: 3px solid #DAAA00;
                border-left: 3px solid #DAAA00;
                border-right: 3px solid #DAAA00;
            }
            .hours-table {
                border-top: none;
                border-bottom: none;
            }
            hr {
                display: block;
                height: 1px;
                border: 0;
                border-top: 2px solid #d8d8d8;
                margin: 0;
                padding: 0;
            }

            #legend-container {
                width: 250px;

            }

            .legend-item-container{
                margin-left: 8px;
                margin-right: 8px;

            }

        }



        </style>
        <iron-ajax
            id="init_ajax"
            url$="[[json_path]]"
            handle-as="json"
            on-response="_make_iron_ajax"
            debounce-duration="300"></iron-ajax>

    <iron-media-query query="min-width: 1000px" query-matches="{{view_desktop}}"></iron-media-query>
    <iron-media-query query="max-width: 1000px" query-matches="{{view_tablet}}"></iron-media-query>
    <iron-media-query query="max-width: 700px" query-matches="{{view_mobile}}"></iron-media-query>

    <template id="ajax_repeater" is="dom-repeat" items={{_api_parameters}} as="api">
    <iron-ajax
        id="[[api.id]]"
        url="[[api.url]]"
        params="[[api.params]]"
        handle-as="json"
        on-response="handle_response"
        debounce-duration="300"></iron-ajax>
    </template>

        <h2>Library Hours</h2>
        <div id="legend-container">
            <div class="legend-item-container">
                <p class="legend-item">
                    <img  class="legend-icon" src="https://drive.google.com/uc?id=1svSqs2ToLv4DypkqUGZdBgeRA6h-pEL2">
                    Today
                </p>
            </div>
            <div class="legend-item-container">
                <p class="legend-item">
                    <img  class="legend-icon" src="https://drive.google.com/uc?id=19Z0p9iolwPXnuqMCXINlENgGIbqd2VZC">
                    Selected Day
                </p>
            </div>
            <div class="legend-item-container">
                <p class="legend-item">
                    <img  class="legend-icon" src="https://drive.google.com/uc?id=1VxB6X0r5UWaigjQZh9E_GG47Yhn2PQTW">
                    Special Hours
                </p>
            </div>
        </div>

        <div id="month_container">
            <div class="month_nav"><img src="https://drive.google.com/uc?id=153eN32zAz5tqlkLlOU6B2h4mGQX9Jj2P" alt="past" style="transform: rotate(90deg);" on-click="change_month"></div>
            <template is="dom-repeat" items="{{month_array}}" as="month">
                <div id="{{month.order}}">
                    <span class="title">[[month.label]]</span>
                    <div class="cal-row">
                        <div class="col-header"><div class="day-text">S</div></div>
                        <div class="col-header"><div class="day-text">M</div></div>
                        <div class="col-header"><div class="day-text">T</div></div>
                        <div class="col-header"><div class="day-text">W</div></div>
                        <div class="col-header"><div class="day-text">T</div></div>
                        <div class="col-header"><div class="day-text">F</div></div>
                        <div class="col-header"><div class="day-text">S</div></div>
                    </div>
                    <template is="dom-repeat" items="{{month.data}}" as="week">
                        <div class="cal-row">
                        <template is="dom-repeat" items="{{week}}" as="day">
                            <div locweek$= "[[day.loc_week]]" locday$= "[[day.loc_day]]" class$="[[day.is_today]] cal-day [[day.is_exception]] {{day.is_selected}} [[day.month_status]]" on-click="display_new_week">
                                <div class$="[[day.month_status]] day-text" day$="[[day.date_json]]">[[day.day]]</div>
                            </div>
                        </template>
                        </div>
                    </template>
                </div>
            </template>
            <div class="month_nav"><img src="https://drive.google.com/uc?id=153eN32zAz5tqlkLlOU6B2h4mGQX9Jj2P" alt="future" style="transform: rotate(270deg);" on-click="change_month"></div>
        </div>

        <div id="view_desktop">
        <div class="hours-table">
            <div class="hours-tr">
            <div class="hours-th">[[_format_header(week_array)]]</div>
            <template is="dom-repeat" items="{{week_array}}">
                <div class$="[[item.is_today]] hours-th"style="line-height: 18px;"><span class="th-head">[[item.day_str]]</span><br />
                <span class="th-sub">[[item.month_str]] [[item.day]]</span></div>
            </template>
            </div>
            <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <div class="hours-tr">
                <div class="hours-td">
                    <a class$="[[item.type]]" href$=[[item.url]]>
                    <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
                    [[item.title]]
                    </a>
                </div>
                <template is="dom-repeat" items="{{item.hours}}" as="hours">
                    <div class$="[[hours.hours.status]] [[hours.is_today]] hours-td">
                        <span class="keep-together">[[hours.display_string.open]]</span>
                        <span class="keep-together">[[hours.display_string.close]]</span>
                    </div>
                </template>
            </div>
            </template>
        </div>
        </div>

        <div id="view_tablet">
        <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <a class$="[[item.type]]" href$=[[item.url]]>
            <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
            [[item.title]]
            </a>
            <div class="hours-table">
                <div class="hours-tr">
                    <template is="dom-repeat" items="{{week_array}}">
                        <div class$="[[item.is_today]] hours-th" style="line-height: 18px;"><span class="th-head">[[item.day_str]]</span><br />
                        <span class="th-sub">[[item.month_str]] [[item.day]]</span></div>
                    </template>
                </div>
                <div class="hours-tr">
                    <template is="dom-repeat" items="{{item.hours}}" as="hours">
                        <div class$="[[hours.hours.status]] [[hours.is_today]] hours-td">
                            <span class="keep-together">[[hours.display_string.open]]</span>
                            <span class="keep-together">[[hours.display_string.close]]</span>
                        </div>
                    </template>
                </div>
            </div>
        </template>
        </div>

        <div id="view_mobile">
        <hr>
        <template is="dom-repeat" items="{{hours_this_week}}" sort=sort_hours>
            <a class$="[[item.type]]" href$=[[item.url]]>
            <img  class="status-icon" src$=[[item.icon_url]] alt$=[[item.status]]>
            [[item.title]]
            </a>
            <span id$="[[_concat_id(item.id, 'toggle')]]" on-click="toggle_lib_mobile">expand</span>
            <div hidden="hidden" class="hours-table" id="[[_concat_id(item.id, 'table')]]">
            <template is="dom-repeat" items="{{item.hours}}" as="hours">
                <div class$="[[hours.is_today]] hours-tr">
                    <div style="width:40%;" class="hours-td"><strong>[[hours.date.day_str]]</strong> [[hours.date.month_str]] [[hours.date.day]]
                    </div>
                    <div style="width:60%;" class$="[[hours.hours.status]] hours-td">
                        <span class="keep-together">[[hours.display_string.open]]</span>
                        <span class="keep-together">[[hours.display_string.close]]</span>
                    </div>
                </div>
            </template>
            </div>
            <hr>
        </template>
        </div>

        `;
    }

  static get is() { return 'library-hours-week'; }
  static get properties() {
    return {
      _calendars: {
        type: Object,
        value: {},
    },
      _api_parameters: {
          type: Array,
          value: [],
      },
      json_path: {
        type: String,
      },
      hours_this_week: {
        type: Array,
        value: [],
      },
      today: {
          type: Date
      },
      selected_day: {
          type: Object,
          value: {},
      },
        ajax_ids: {
          type: Array,
          value: [],
      },
      event_ids: {
        type: Array,
        value: [],
    },
    _lib_event_crosswalk: {
      type: Object,
      value: {},
  },
      week_array: {
        type: Array,
        value: [],
    },
    month_array: {
        type: Array,
        value: [],
    }
    };
  }
  constructor() {
      super();

  }

  ready(){
      super.ready();

      // Look up current week's hours
      var today = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
      today = new Date(today.split(',')[0]);
      this.today = today;
      this.set('selected_day.date', today);
      this.set('selected_day.location', {});
      this.week_array = this.create_week_array(today);
      console.log(this.week_array);

      // Construct initial data structure for calendar view
      this.construct_month(today);
      console.log(this.month_array);

      // Load JSON file with Google Calendar API call parameters.
      // Then make calls with iron-ajax componenets
      this.$["init_ajax"].generateRequest();

  }

  _make_iron_ajax(response){
      var data = response.detail.response;

      //TODO: validate json file

      // Format data to fill in iron-ajax parameters
      for (var i = 0; i < data.length; i++){
          var ajax_params = {};
          this.push('ajax_ids', data[i].ajax_id);
          ajax_params['url'] = data[i].url;
          ajax_params['params'] = data[i].params;
          ajax_params['id'] = data[i].ajax_id;
          this._lib_event_crosswalk[data[i].ajax_id] = data[i].event_series;
          for (var ii = 0; ii < data[i].event_series.length; ii++) {
              this.push('event_ids', data[i].event_series[ii]['search_term']);
          }
          this.push('_api_parameters', ajax_params);
      }
      console.log(this._api_parameters);

      // Call iron-ajax components we just created
      this.$.ajax_repeater.render();
      for (var i = 0; i < this.ajax_ids.length; i++){
          this.shadowRoot.querySelector("#" + this.ajax_ids[i]).generateRequest();

      }


  }

  handle_response(response){

      // Extract data from google api call and metadata iron-ajax.
      var data = response.detail.response;
      var ajax_id = response.target.getAttribute('id');
      var cal_events = this._lib_event_crosswalk[ajax_id];

      // Get hours for each event series in JSON file
      for (var q = 0; q < cal_events.length; q++) {
          var event_id = cal_events[q].search_term;
          var lib_title = cal_events[q].title;
          var org_type = cal_events[q].type;
          var url = cal_events[q].url;

          // Parse calendar for event series matching id specfied in iron-ajax attribute
          // Format data and append to element property. Just for safe keeping.
          var parsed_data = this.parse_calendar(data, event_id);
          if (parsed_data){
              var event_series = {'title': lib_title, 'id': event_id, 'data': parsed_data, 'ajax_id': ajax_id, 'type': org_type, 'url': url};
              this._calendars[event_id] = event_series;

              // Get hours for each day in week
              var weeks_hours = this._create_week_hours(event_series);

              // append to element property with sort order.
              // displayed by repeater template.
              var index = this.event_ids.indexOf(event_id);
              if (index != -1) {
                weeks_hours['display_order'] = index;
                this.push('hours_this_week', weeks_hours);
                console.log(weeks_hours);
              }

              // Check for exceptions
              for (var i = 0; i < this.month_array.length; i++){
                  for (var ii = 0; ii < this.month_array[i].data.length; ii++){
                      for (var iii = 0; iii < this.month_array[i]['data'][ii].length; iii++){
                          if (this.month_array[i]['data'][ii][iii].is_exception == 'not_exception'){
                              var cal_hours = this.day_hours(this.month_array[i]['data'][ii][iii].date, event_series.data);
                              if (cal_hours.exception){
                                  //this.month_array[i]['data'][ii][iii]['is_exception'] = 'is_exception';
                                  this.set(`month_array.${i}.data.${ii}.${iii}.is_exception`, 'is_exception');
                              }
                          }
                      }
                  }
              }
          }
      }

  }

  display_new_week(e){
      // Remove background icon from previously selected day
      this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`, 'not_selected_day');

      // Apply appropriate css to calendar day
      if (e.target.getAttribute('day')){
          var day = e.target.getAttribute('day').split("-");
          var container = e.target.parentNode;
      }
      else{
          var day = e.target.children[0].getAttribute('day').split("-");
          var container = e.target;
      }
      var loc_month = container.parentNode.parentNode.getAttribute('id');
      loc_month = parseInt(loc_month.split("_")[1]);
      var loc_week =  parseInt(container.getAttribute('locweek'));
      var loc_day =  parseInt(container.getAttribute('locday'));

      this.set(`month_array.${loc_month}.data.${loc_week}.${loc_day}.is_selected`, 'selected_day');
      this.set('selected_day.location.month', loc_month);
      this.set('selected_day.location.week', loc_week);
      this.set('selected_day.location.day', loc_day);



     // Replace week array
     day = new Date(day[0], day[1] - 1, day[2]);
     this.set('selected_day.date', day)
     this.week_array = this.create_week_array(day);

     // Re-calculuate and update hours for each library
     var hours_this_week = [];
     for (var i = 0; i < this.event_ids.length; i++){
         var event_series = this._calendars[this.event_ids[i]];
         var weeks_hours = this._create_week_hours(event_series);
         weeks_hours['display_order'] = i;

         //get todays library status;
         for (var ii = 0; ii < this.hours_this_week.length; ii++){
             if (weeks_hours.id == this.hours_this_week[ii].id) {
                 weeks_hours['icon_url'] = this.hours_this_week[ii].icon_url;
                 hours_this_week.push(weeks_hours);
             }
         }

     }

     this.hours_this_week = hours_this_week;


  }

  change_month(e){
      // Shift the month_array property with next or previous month

      var tardis = e.target.getAttribute('alt');
      var query_month;
      var query_year;
      var query_date;
      var new_month;
      this.set('selected_day.just_created', false);
      if (tardis == "future"){
          var query_month = this.month_array[2].month_n + 1;
          var query_year = this.month_array[2].year_n;
          if (query_month == 12){
              query_month = 0;
              query_year += 1;
          }
          query_date = new Date(query_year, query_month, 15);
          new_month = this._make_month_range(query_date, 1, 2, true)[0];

          // Update selected day class
          if (this.month_array[0].month_n == this.selected_day.date.getMonth()){
              this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`, 'not_selected_day');
              this.set('selected_day.in_range', false);
          }
          else {
              if (this.selected_day.in_range && !this.selected_day.just_created) {
                  this.set('selected_day.location.month', this.selected_day.location.month - 1);
              }

          }


          this.shift('month_array');
          this.push('month_array', new_month);
          this.set('month_array.0.order', 'month_0');
          this.set('month_array.1.order', 'month_1');
      }
      else if (tardis == "past"){
          var query_month = this.month_array[0].month_n - 1;
          var query_year = this.month_array[0].year_n;
          if (query_month == -1){
              query_month = 11;
              query_year -= 1;
          }
          query_date = new Date(query_year, query_month, 15);
          new_month = this._make_month_range(query_date, 1, 0, true)[0];

          // Update selected day class
          if (this.month_array[2].month_n == this.selected_day.date.getMonth()){
              this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`, 'not_selected_day');
              this.set('selected_day.in_range', false);
          }
          else {
              if (this.selected_day.in_range && !this.selected_day.just_created){
                  this.set('selected_day.location.month', this.selected_day.location.month + 1);
              }

          }
          this.pop('month_array');
          this.splice('month_array', 0, 0, new_month);
          this.set('month_array.1.order', 'month_1');
          this.set('month_array.2.order', 'month_2');

      }

  }

  _make_month_range(query_day, n_months, index, update){
      // Make a nested array of days for each month
      var months = []
      var current_month = query_day.getMonth();
      var today = this.today.toJSON().split("T")[0];
      var selected_day = this.selected_day.date.toJSON().split("T")[0];
      var month = ['January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December']
      for (var i = index; i < (n_months + index); i++){
          var d = {}
          var m = current_month + i - index;


          // Create month metadata
          d['order'] = "month_" + String(i);
          d['year_n'] = 1900 + query_day.getYear();
          if (m >= 12){
              m -= 12;
              d['year_n'] += 1;
          }
          d['month_n'] = m;
          d['label'] = month[m] + " " + String(d.year_n);

          // Construct a 6 row calendar for each month
          var day1 = new Date(d.year_n, d.month_n, 1);
          var day0 = new Date(d.year_n, d.month_n, 1);
          day0.setDate(day1.getDate() - day1.getDay());
          d['data'] = []
          var cal_row = [];
          var cal_week = 0;
          for (var ii = 0; ii < 43; ii++){

              var dd = {};
              var day_0copy = new Date(day0);
              if ((ii % 7 == 0) && (ii != 0)){
                  d.data.push(cal_row);
                  cal_week += 1;
                  var cal_row = [];
              }

              // Include metadata about each calendar day
              var cal_day = new Date(day_0copy.setDate(day0.getDate() + ii));
              var cal_day_year = 1900 + cal_day.getYear();
              dd['day'] = cal_day.getDate();
              dd['date'] = cal_day
              dd['date_json'] = cal_day.toJSON().split("T")[0];
              var cal_day_month = cal_day.getMonth()

              if (dd['date_json'] == today){
                  dd['is_today'] = "cal-day-today";
              }
              else{
                  dd['is_today'] = "cal-day-not-today";
              }

              if (d['year_n'] > cal_day_year) {
                  dd['month_status'] = 'previous';
              }
              else if (d['year_n'] < cal_day_year) {
                  dd['month_status'] = 'next';
              }
              else if ( cal_day_month == m) {
                  dd['month_status'] = 'current';
              }
              else if (cal_day_month > m){
                  dd['month_status'] = 'next';
              }
              else{
                  dd['month_status'] = 'previous';
              }
              dd['is_exception'] = 'not_exception';

              if (dd['date_json'] == selected_day){
                  dd['is_selected'] = 'selected_day';
                  this.set(`month_array.${this.selected_day.location.month}.data.${this.selected_day.location.week}.${this.selected_day.location.day}.is_selected`, 'not_selected_day');
                  this.set('selected_day.location.month', i);
                  this.set('selected_day.location.week', cal_week);
                  this.set('selected_day.location.day', ii - cal_week * 7);
                  this.set('selected_day.in_range', true);
                  this.set('selected_day.just_created', true);
              }
              else {
                  dd['is_selected'] = 'not_selected_day';
              }

              dd['loc_month'] = i;
              dd['loc_week'] = cal_week;
              dd['loc_day'] = ii - cal_week * 7;

              // Check if hours are exceptions
              if (update){
                  for (var cal_id in this._calendars) {
                      var cal_hours = this.day_hours(cal_day, this._calendars[cal_id].data);
                      if (cal_hours.exception){
                          dd['is_exception'] = 'is_exception';
                          break;
                      }

                  }
              }

              cal_row.push(dd);
          }
          months.push(d);
      }
      return months;
  }

  construct_month(today){
      var months = this._make_month_range(today, 3, 0, false);
      for (var i = 0; i < months.length; i++){
          this.push('month_array', months[i]);
      }

  }
  _create_week_hours(event_series){
      var data = event_series.data;
      var weeks_hours = {};
      weeks_hours['hours'] = [];

      if (event_series.type.toLowerCase() == "library"){
          var is_library = true;
          weeks_hours['type'] = "lib-titles";
      }
      else {
          var is_library = false;
          weeks_hours['type'] = "dept-titles";
      }

      for (var i = 0; i < 7; i++){
          var week_day = this.week_array[i];
          var a_days_hours = this.day_hours(week_day['date'], data);
          var display_string = this.hours_string(a_days_hours);
          weeks_hours['hours'].push({'hours': a_days_hours, 'display_string' : display_string, 'date' : week_day})


          if (this.week_array[i]['is_today'] == 'is-today'){
              weeks_hours['hours'][i]['is_today'] = "is-today";


              // Add location of appropriate icon svg
              if (is_library){
                  if (this.open_now(a_days_hours)){
                      weeks_hours['icon_url'] = "https://drive.google.com/uc?id=1oef1f3noVDdo0AE6Q5wlaj-qlSFmGC5T";
                  }
                  else{
                      weeks_hours['icon_url'] = "https://drive.google.com/uc?id=1i3Fq2Zu_4AbbtU6s26CgBhCBFCMJCTe9";

                  }
              }
              else {
                  if (this.open_now(a_days_hours)){
                      weeks_hours['icon_url'] = "https://drive.google.com/uc?id=1n0fB8usubCNXZus_fy3sTTfaiawmMc36";
                  }
                  else{
                      weeks_hours['icon_url'] = "https://drive.google.com/uc?id=1zRzqS2sXCCXCu6WkNkz70hrY5sBMT07v";

                  }
              }


          }
          else {
              weeks_hours['hours'][i]['is_today'] = "not-today";
          }

      }

      weeks_hours['title'] = event_series.title;
      weeks_hours['id'] = event_series.id;
      weeks_hours['url'] = event_series.url;

      return weeks_hours;
  }
  toggle_lib_mobile(e){
      //event listener for mobile accordian
      var library = e.target.getAttribute('id').split("__")[0];
      var status = e.target.textContent;
      var table = "#" + library + "__table";
      if (status == 'expand'){
          e.target.textContent = 'less';
          this.shadowRoot.querySelector(table).removeAttribute('hidden');
      }
      else{
          e.target.textContent = 'expand';
          this.shadowRoot.querySelector(table).setAttribute('hidden', 'hidden');
      }

  }

  _concat_id(a, b){
      return a + "__" + b;
  }

  open_now(data){
      // Checks if library is currently open
      if (data.status == 'closed'){
          return false;
      }
      var today = new Date().toLocaleString("en-GB", {timeZone: "America/Los_Angeles"});
      var now = today.split(',')[1].split(":");
      now = parseInt(now[0] + now[1]);

      var lib_open = data.start_time.split(":");
      lib_open = parseInt(lib_open[0] + lib_open[1]);
      var lib_closed = data.end_time.split(":");
      lib_closed = parseInt(lib_closed[0] + lib_closed[1]);

      if (now >= lib_open && now < lib_closed) {
          return true;
      }
      else if (now >= lib_open && lib_open >= lib_closed) {
          return true; //hours span two days
      }
      else {
          return false;
      }


  }
  _format_header(data){
      var output = "";
      if (data.length == 7){
          output += data[0]['month_str'].toUpperCase() + " " + data[0]['day'];
          output += " - " + data[6]['month_str'].toUpperCase() + " " + data[6]['day'] + " " + data[6]['year'];
      }
      //[[week_array[0]['month_str']]] [[week_array[0]['day']]] - [[week_array[6]['month_str']]] [[week_array[6]['day']]], [[week_array[0]['year']]]
      return output;
  }
  create_week_array(a_date){
      /*
      Creates an array of dates (Sunday-Saturday) given a date in that week
      */
      var output = [];
      var a_date_day = a_date.getDay();
      var weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT', 'SUN'];
      var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      var today = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
      today = new Date(today.split(',')[0]).toDateString();

       for (var i = 0; i < 7; i++){
           var data = {};
           var d = new Date((1900 + a_date.getYear()), a_date.getMonth(),  a_date.getDate());
           d.setDate(a_date.getDate() - a_date_day + i);

           if (a_date_day != 0){
               if (d.getDay() == 0){
                   d.setDate(d.getDate() + 7) // Monday is start of week
                   data['i'] = 7;
               }
               else{
                   data['i'] = i - 1;
               }
           }
           else {
               if (d.getDay() == 0){
                   data['i'] = 7;
               }
               else {
                   d.setDate(d.getDate() - 7)
                   data['i'] = i - 1;

               }

           }

           data['date'] = d;
           if (d.toDateString() == today){
               data['is_today'] = 'is-today';
           }
           else {
               data['is_today'] = 'not-today';
           }

           data['day_str'] = weekday[d.getDay()];
           data['month_str'] = month[d.getMonth()];
           data['day'] = d.getDate();
           data['year'] = 1900 + d.getYear();
           output.push(data);
       }

        output.push(output.shift());


       return output;
  }

  sort_hours(a, b){
      return a.display_order - b.display_order;
  }

  hours_string(data){
      /*
      Takes daily hours oject (from day_hours function)
      and creates a display string for element.
      */
      if (data.status == 'closed'){
          return {'open': 'CLOSED', 'close': ""};
      }

     var display_dict = {};
      var day_arr = [data.start_time, data.end_time];
      for (var i = 0; i < 2; i++){
          var display_string = "";
          var time_arr = day_arr[i].split(':');
          var hour = parseInt(time_arr[0]);
          if (hour > 12){
              hour = hour - 12;
              var t = 'pm';
          }
          else if (hour == 0){
              hour = 12;
              var t = 'am';
          }
          else if (hour == 12){
              hour = 12;
              var t = 'pm';
          }
          else {
              var t = 'am';
          }

          display_string += hour.toString() + ":" + time_arr[1];
          display_string += " " + t;
          if (i == 0) {
              display_dict['open'] = display_string + " -";
          }
          else{
              display_dict['close'] = display_string;
          }
      }
      return display_dict;

  }

  parse_rrule(rule_str){
      /*
      Converts Google recurrence rule string into an object.
      */
      var rule_obj = {};
      var rule_arr = rule_str.split(":")[1].split(";");
      for (var i = 0; i < rule_arr.length; i++){
          var item = rule_arr[i].split('=');
          if (item[0] == 'FREQ'){
              rule_obj['freq'] = item[1];
              if (item[1] == 'DAILY'){
                  rule_obj['days'] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
              }
          }
          else if (item[0] == 'BYDAY') {
              rule_obj['days'] = item[1].split(',');
          }
          else if (item[0] == 'UNTIL') {
              var year = item[1].substr(0,4);
              var month = item[1].substr(4,2);
              var day = item[1].substr(6,2) ;
              rule_obj['end_date'] = new Date(year + "-" + month +  "-" + day);
          }
      }
      if (! ('end_date' in rule_obj)){
          var a_future_date = new Date();
          a_future_date.setDate(a_future_date.getDate() + 730);
          rule_obj['end_date'] = a_future_date;
      }

      return rule_obj;
  }

  to_goog_day(day){
      /*
      Converts result of getDay method to format used by Google.
      */
      var cw = {'1':'MO', '2':'TU', '3':'WE', '4':'TH', '5':'FR','6':'SA', '0':'SU'};
      return cw[day]
  }
  split_datetime(date_str){
      /*
      Splits google datetime string into a simplified 2 item object
      */
      var datetime_obj = {};
      var datetime_arr = date_str.split('T');
      var date_arr = datetime_arr[0].split("-");
      datetime_obj['date'] = new Date(datetime_arr[0]);
      datetime_obj['time'] = datetime_arr[1].substr(0, 5);

      return datetime_obj;
  }

  day_hours(day, calendar){
      /*
      Queries calendar (formatted with parse_calendar function)
      for hours for a given date. Returns object.
      */

      // Check if day is an exception
      var day_str = day.toISOString().split('T')[0];
      if (day_str in calendar['exceptions']){
          return calendar['exceptions'][day_str];
      }

      // Check if part of normal hours
      for (var i = 0; i < calendar['id'].length; i++){
          var cal_id = calendar['id'][i];
          if (day >= calendar['rule'][cal_id]['start_date'] && day <= calendar['rule'][cal_id]['end_date']){
              if (calendar['rule'][cal_id]['days'].includes(this.to_goog_day(day.getDay()))) {
                  var hours = {};
                  hours['start_time'] = calendar['rule'][cal_id]['start_time'];
                  hours['end_time'] = calendar['rule'][cal_id]['end_time'];
                  hours['exception'] = false;
                  hours['status'] = 'open';
                  return hours;
              }
          }
      }
      return {'status':'closed', 'exception': false};
  }

  parse_calendar(calendar, search_term){
      /*
      Finds all reoccurring event series in calendar that contain search term in the description field.
      Finds and includes exceptions.

      Output data structure looks something like:
      {'id': ["3q5ibqg4mqafmq19s03nsaf92f"]
       'name': {"3q5ibqg4mqafmq19s03nsaf92f": 'Shields Library Main'},
       'url': 'https://www.library.ucdavis.edu/library/peter-j-shields/',
       'rule': {"3q5ibqg4mqafmq19s03nsaf92f": {'start_date': '2018-02-05'
                                               'end_date': '2018-06-01'
                                               'freq': 'WEEKLY'
                                               'days': ['MO', 'TU', 'WE', TH, 'FR']
                                               'start_time': '07:30:00-8:00'
                                               'end_time': '00:00:00-8:00'
                                              }
               }
       'overlap': false // true if two reoccurring series overlap
       'exceptions' {'2018-06-05': {'start_time': '07:30:00-8:00'
                                    'end_time': '00:00:00-8:00'
                                   }
                     '2018-06-15': 'closed' // closed entire day
                    }
      }
      */
      var events = calendar['items'];

      // reformat data as displayed in doc string
      var cal_data = {'id': [],
                      'name': {},
                      'rule': {},
                      'overlap': false,
                      'exceptions': {}}

      for (var i = 0; i < events.length; i++){

          // keep if reoccurring event
          if ('recurrence' in events[i]){
              if ('description' in events[i]){
                  var event_description = events[i]['description'].toLowerCase();
              }
              else {
                  var event_description = "";
              }

              // keep if search term is in event description
              if (event_description.includes(search_term.toLowerCase())){
                  var event_id = events[i]['id'];
                  var event_name = events[i]['organizer']['displayName'];
                  var event_rule = this.parse_rrule(events[i]['recurrence'][0]);
                  var start = this.split_datetime(events[i]['start']['dateTime']);
                  event_rule['start_date'] = start['date'];
                  event_rule['start_time'] = start['time'];
                  event_rule['end_time'] = this.split_datetime(events[i]['end']['dateTime'])['time'];


                  cal_data['id'].push(event_id);
                  cal_data['name'][event_id] = event_name;
                  cal_data['rule'][event_id] = event_rule;

                  //TODO: check if multiple reoccuring events overlap

              }
          }
      }
      if (cal_data.id.length == 0){
          console.log(search_term, "not found in calendar");
          return false;
      }
      // Find exceptions to all recurring series
      for (var i = 0; i < events.length; i++){
          if (cal_data['id'].includes(events[i]['recurringEventId'])){

              // no open hours at all (event cancelled)
              if (events[i]['status'] == 'cancelled'){
                  var exc_date = events[i]['originalStartTime']['dateTime'];
                  exc_date = exc_date.split('T')[0];
                  cal_data['exceptions'][exc_date] = {'exception': true, 'status': 'closed'};
              }
              // hours are different than normal, but still open
              else if (events[i]['status'] == 'confirmed'){
                  var exc_date_times = {};
                  var exc_date = events[i]['start']['dateTime'].split('T')[0];
                  exc_date_times['end_time'] = this.split_datetime(events[i]['end']['dateTime'])['time'];
                  exc_date_times['start_time'] = this.split_datetime(events[i]['start']['dateTime'])['time'];
                  exc_date_times['status'] = 'open';
                  exc_date_times['exception'] = true;
                  cal_data['exceptions'][exc_date] = exc_date_times;
              }
          }
      }
      return cal_data;
  }

}

customElements.define(LibraryHoursWeek.is, LibraryHoursWeek);

document.querySelector('library-hours-week').addEventListener('click', function(e){});
