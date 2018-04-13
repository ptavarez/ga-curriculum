import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('examples')
  this.route('example', { path: '/examples/:example_id' })
  this.route('week-one-repos')
  this.route('week-two-repos');
  this.route('week-three-repos');
  this.route('week-four-repos');
  this.route('week-five-repos');
  this.route('week-six-repos');
  this.route('week-seven-repos');
  this.route('week-eight-repos');
  this.route('week-nine-repos');
  this.route('week-ten-repos');
  this.route('week-eleven-repos');
  this.route('week-twelve-repos');
})

export default Router
