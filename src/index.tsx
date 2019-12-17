import { h, render } from 'preact';
import App from 'containers/App';

// Inject your application into the an element with the id `app`.
// Make sure that such an element exists in the dom ;)
render(<App />, document.getElementById('app'));
