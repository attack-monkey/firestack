# firestack
express + angular + firebase


Angularfire is awesome - but lacks some key elements that firestack seeks to solve.

1. Firebase only loads when angular has loaded which means a noticeable delay in data.
2. Complex operations (i.e. ones that should be performed on the server side) can't be done by the angularfire api alone.
3. Basically the only server is firebase, which only handles data (and users).
4. Even with services like prerender.io SEO can still be a nightmare.

## Scope

Firestack uses node + express to give you a js stack that compliments angular + firebase and is wired up with firewire.
- Firebase data is available as soon as angular is ready.
- Server-side operations are handled by hitting the express api.
- While you still need Prerender, you can now also dynamically load meta + schema.org + opengraph data.

At this stage the stack does not go below (i.e. Server, hosting, etc.) or above (Frontend frameworks etc.) this.

## firewire
- Instead of waiting for firebase to be called by angular (which can be quite slow to establish), firewire calls firebase from Express.
- the firewire object `fw` is exposed via jade into the client.
- angular loads `fw` to `$rootScope.fw` but also establishes a client connection to firebase and switches `$rootScope.fw` to a realtime connection seamlessly.

### firewire usage
`#{fw.blah} 	// Loads static data (i.e. doesn't switch to realtime`
`{{fw.blah}} 	// Switches to realtime data once a connection is made`
## Fire

## This project is still half-baked sorry...

Firestack solves the problems of angular + firebase alone - creating an awesome firey stack.  
- Firewire
  - Creates dynamic page & data routes.
  - Makes firebase data available to angular with zero delay and seamlessly switches to realtime data moments later.
