const appbasePrefs = {
  "name": "Search amazon_reviews + Faceted Search",
  "description": "",
  "pipeline": "amazon_reviews",
  "backend": "elasticsearch",
  "id": "8bea963e-365c-4d89-ac73-eefbe987f6d0",
  "pageSettings": {
    "currentPage": "home",
    "pages": {
      "home": {
        "componentSettings": {
          "search": {
            "componentType": "SEARCHBOX",
            "customMessages": {
              "noResults": "No suggestions found for <mark>[term]</mark>"
            },
            "searchButton": {
              "icon": "",
              "text": "Click here to search"
            },
            "redirectUrlText": "Open URL",
            "redirectUrlIcon": "",
            "showSearchAs": "sticky",
            "fields": {
              "title": {
                "dataField": "Summary",
                "highlight": true
              },
              "description": {
                "dataField": "Text",
                "highlight": true
              },
              "price": {
                "dataField": "HelpfulnessNumerator",
                "highlight": false
              },
              "priceUnit": "Helpful",
              "image": {
                "dataField": "",
                "highlight": false
              },
              "handle": {
                "dataField": "",
                "highlight": false
              },
              "handleViewer": "link",
              "userDefinedFields": [],
              "cssSelector": ""
            },
            "rsConfig": {
              "autosuggest": false,
              "enableAI": false,
              "AIUIConfig": {},
              "showVoiceSearch": true,
              "componentType": "SEARCHBOX"
            }
          },
          "result": {
            "componentType": "REACTIVELIST",
            "fields": {
              "title": {
                "dataField": "Summary",
                "highlight": true
              },
              "description": {
                "dataField": "Text",
                "highlight": true
              },
              "price": {
                "dataField": "HelpfulnessNumerator",
                "highlight": false
              },
              "priceUnit": "Helpful",
              "image": {
                "dataField": "",
                "highlight": false
              },
              "handle": {
                "dataField": "",
                "highlight": false
              },
              "handleViewer": "link",
              "userDefinedFields": [],
              "cssSelector": ""
            },
            "customMessages": {
              "resultStats": "[count] products found in [time] ms",
              "noResults": "No Results Found!"
            },
            "rsConfig": {
              "pagination": false,
              "infiniteScroll": true,
              "componentType": "REACTIVELIST"
            },
            "showAIAnswer": false,
            "sortOptionSelector": [],
            "resultHighlight": true,
            "layout": "list",
            "viewSwitcher": false,
            "displayFields": {}
          },
          "Authors_0": {
            "enabled": false,
            "customMessages": {
              "loading": "Fetching Options",
              "noResults": "No items Found"
            },
            "rsConfig": {
              "title": "Authors",
              "dataField": "authors.keyword",
              "filterLabel": "Authors",
              "filterType": "list",
              "queryFormat": "or",
              "sortBy": "count",
              "componentType": "MULTILIST",
              "showCount": true,
              "showCheckbox": true,
              "showSearch": true,
              "showMissing": false,
              "missingLabel": null,
              "selectAllLabel": null,
              "componentId": "Authors_0"
            },
            "componentType": "MULTILIST",
            "facetType": "dynamic"
          },
          "Books_Count_1": {
            "enabled": false,
            "customMessages": {
              "loading": "Fetching Options",
              "noResults": "No items Found"
            },
            "rsConfig": {
              "title": "Books Count",
              "dataField": "books_count",
              "filterLabel": "Books Count",
              "filterType": "range",
              "startValue": "10",
              "endValue": "97",
              "startLabel": "Start",
              "endLabel": "End",
              "showHistogram": true,
              "calendarInterval": null,
              "componentType": "RANGEINPUT",
              "componentId": "Books_Count_1"
            },
            "componentType": "RANGEINPUT",
            "facetType": "dynamic"
          }
        },
        "indexSettings": {
          "index": "amazon_reviews",
          "fusionSettings": {
            "app": null,
            "profile": null,
            "searchProfile": null,
            "meta": {
              "sponsoredProfile": null
            }
          },
          "endpoint": {
            "url": "/_knn_search/_reactivesearch",
            "method": "POST",
            "headers": "{\"Authorization\":\"Basic ODI0ZjYyMzI3OWViOjY5MmNmZWVmLTYyMWItNDQ5NS04NzJmLWFkM2UwMTc1NzkwOQ==\"}"
          }
        }
      }
    },
    "fields": {
      "cssSelector": "",
      "description": {
        "dataField": "Text",
        "highlight": false
      },
      "handle": {
        "dataField": "",
        "highlight": false
      },
      "handleViewer": "link",
      "image": {
        "dataField": "",
        "highlight": false
      },
      "price": {
        "dataField": "HelpfulnessNumerator",
        "highlight": false
      },
      "priceUnit": "Helpful",
      "title": {
        "dataField": "Summary",
        "highlight": false
      },
      "userDefinedFields": []
    }
  },
  "themeSettings": {
    "type": "classic",
    "customCss": "",
    "rsConfig": {
      "colors": {
        "primaryColor": "#0B6AFF",
        "primaryTextColor": "#fff",
        "textColor": "#424242",
        "titleColor": "#424242"
      },
      "typography": {
        "fontFamily": "Open Sans"
      }
    },
    "meta": {
      "bodyBackgroundColor": "#fff",
      "navbarBackgroundColor": "#001628",
      "linkColor": "#3eb0ef",
      "fontWeight": 400
    }
  },
  "globalSettings": {
    "currency": "USD",
    "showSelectedFilters": true,
    "meta": {
      "branding": {
        "logoUrl": "",
        "logoWidth": 200,
        "logoAlignment": "left"
      },
      "deploySettings": {
        "versionId": ""
      },
      "templateSettings": {
        "templateVersionId": "0.3.5"
      },
      "endpoint": {
        "url": "/_knn_search/_reactivesearch",
        "method": "POST",
        "headers": "{\"Authorization\":\"Basic ODI0ZjYyMzI3OWViOjY5MmNmZWVmLTYyMWItNDQ5NS04NzJmLWFkM2UwMTc1NzkwOQ==\"}"
      }
    }
  },
  "exportSettings": {
    "exportAs": "embed",
    "credentials": "824f623279eb:692cfeef-621b-4495-872f-ad3e01757909",
    "openAsPage": false,
    "type": "other"
  },
  "chartSettings": {
    "charts": []
  },
  "syncSettings": null,
  "authenticationSettings": {
    "enableAuth0": false,
    "enableProfilePage": true,
    "profileSettingsForm": {
      "viewData": true,
      "editData": true,
      "closeAccount": true,
      "editThemeSettings": true,
      "editSearchPreferences": true
    },
    "clientId": "fQ50eZkW3WlFoDEfHAPBxiOTYmzSXZC7"
  },
  "appbaseSettings": {
    "index": "amazon_reviews",
    "credentials": "824f623279eb:692cfeef-621b-4495-872f-ad3e01757909",
    "url": "https://opensearch-demo-knn-1-drhnehb-arc.searchbase.io"
  }
};

export default JSON.stringify(appbasePrefs);
