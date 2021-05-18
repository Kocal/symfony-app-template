describe('JSON request', function () {
  specify('JSON request should be decoded', function () {
    cy.request({
      method: 'POST',
      url: '/_debug/request',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `
        {
          "json_key_1": "json_value_1",
          "json_key_2": "json_value_2"
        }`,
    }).then((response) => {
      expect(response.body)
        .to.contains('2 parameter(s) received.')
        .and.to.contains('json_key_1 = json_value_1')
        .and.to.contains('json_key_2 = json_value_2');
    });
  });

  specify('Invalid JSON request should not fails', function () {
    cy.request({
      method: 'POST',
      url: '/_debug/request',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `
        {
          "json_key_1": "json_value_1
        `,
    }).then((response) => {
      expect(response.body).to.contains('0 parameter(s) received.');
    });
  });

  specify('Only JSON request should be decoded', function () {
    cy.request({
      method: 'POST',
      url: '/_debug/request',
      headers: {
        // no 'Content-Type' specified
      },
      body: `
        {
          "json_key_1": "json_value_1",
          "json_key_2": "json_value_2"
        }`,
    }).then((response) => {
      expect(response.body).to.contains('0 parameter(s) received.');
    });
  });
});
