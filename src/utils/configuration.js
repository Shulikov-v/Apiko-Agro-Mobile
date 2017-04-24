let configuration = {
  API_ROOT: 'https://apiko-agro.herokuapp.com',
};

export function setConfiguration(name, value) {
  configuration[name] = value;
}

export function setAll(properties) {
  configuration = {...configuration, ...properties};
}

export function unsetConfiguration(name) {
  // TODO
  configuration = configuration.delete(name);
}

export function getConfiguration(key) {
  // TODO
  if (!configuration[key]) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration[key];
}
