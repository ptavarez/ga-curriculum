import DS from 'ember-data'

export default DS.Model.extend({
  week: DS.attr(),
  day: DS.attr('string'),
  repo_url: DS.attr('string'),
  name: DS.attr('string'),
  category: DS.attr('string')
})
