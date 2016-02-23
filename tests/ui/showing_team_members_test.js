Feature('Showing team members');

Scenario('Index page shows Roma players', function (I) {

  I.amOnPage('/');

  I.seeInTitle('A.S.Roma players championship 2000/2001');

  I.see('Francesco Totti');

});