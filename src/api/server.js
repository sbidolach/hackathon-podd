import axios from 'axios'

// TMP projects
const projects = [
    {id: 1, name: 'Human Rights Watch', description: '', funds: '£14.000', icon: 'functions', lat: 51.522, lng: -0.089},
    {id: 2, name: 'Do Something', description: '', funds: '£55.000', icon: 'person', lat: 51.52, lng: -0.08},
    {id: 3, name: 'World Wildlife Fund', description: '', funds: '£22.000', icon: 'star', lat: 51.52, lng: -0.082},
    {id: 4, name: 'Caritas', description: '', funds: '£5.000', icon: 'star', lat: 51.523, lng: -0.085}
];

const project = {id: 5, name: 'XXXX', description: '', funds: '£5.000', icon: 'star', lat: 51.523, lng: -0.085};

const suppliers = [
    {id: 1, name: 'Energy suppliers & smart meters', description: '', cost: '£14.000', quality: 3, leadTime: '1 Week', rating: 3, verified: 'Yes'},
    {id: 2, name: 'Home Retail Group', description: '', cost: '£11.000', quality: 3, leadTime: '4 Days', rating: 3, verified: 'Yes'},
    {id: 3, name: 'Beacon products', description: '', cost: '£4.000', quality: 3, leadTime: '1 Month', rating: 4, verified: 'Yes'},
    {id: 4, name: 'TJ Morris', description: '', cost: '£12.000', quality: 3, leadTime: '1 Day', rating: 5, verified: 'Yes'}
];


export default {
  getProjects: (cb) => {
      return cb(null, projects)
      axios.get('/api/projects')
      .then((res) => cb(null, res.data))
      .catch((e) => cb(e))
  },
  addProject: (values, cb) => {
      return cb(null, project)
      axios.post('/api/project', values)
      .then((res) => cb(null, res.data))
      .catch((e) => cb(e))
  },
  getSuppliers: (cb) => {
      return cb(null, suppliers)
  }
}
