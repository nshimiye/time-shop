# On Demand Shop

Our shop only opens if there is a customer who want to buy our products.

We have a site where customer can specify time when they want to come buy.

Then on the same site, we view and assign someone who can service this customer at his/her chosen time.

# Design

* Site uses websockets to update a calendar in realtime.

* We plan to use `redux` to store info about specified times and their validity.

```sh
npm install -S -E redux react-redux
npm install -S -E redux-thunk
```

We provide 3 basic actions that describe how our info can be managed.
* FETCH_EVENTS: allows us to fetch customer times from our system.
* ADD_EVENTS: allow us to add all fetched times into redux store.
* ASSIGN_SERVICE_HOST: allows us to assign someone for the chosen time.
