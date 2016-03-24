# ordoro for node
wrapper for the ordoro shipping api

`npm install ordoro`

Check out the [Ordoro API docs](http://docs.ordoro.apiary.io/) for the endpoint requirements.

so far I only have a couple of modules in here, and they're incomplete. The Ordoro docs aren't very clear.

I have some of these partially set up, which is enough for you to start pushing orders to your account:
- Orders
- Warehouse
- Products
- Carts

## 1.x update
- breaking changes: I changed all the endpoints to not use callbacks, but instead use Promises
- added a couple of Product endpoints
