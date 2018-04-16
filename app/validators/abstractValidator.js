const validateAbstractData = (body) => {
    var errors = []
    if (!body.title) {
        errors.push({ text: 'Please add a title' });
      }
      if (!body.details) {
        errors.push({ text: 'Please add details' });
    }
    return errors;
}

module.exports = {
    validateAbstractData
};
