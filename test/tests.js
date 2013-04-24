var expect = require('chai').expect;
var shellcolor = require('../');

function logColorMessage(message) {
	var message = shellcolor(message)
	console.log(message);
	return message;
}

describe('#shellcolor()', function() {
	it('should color text', function() {
		var message = logColorMessage('<red>Red</red>');
		expect(message).to.equal('\u001b[31mRed\u001b[0m');
	});

	it('should color background', function() {
		var message = logColorMessage('<bg-red>Red</bg-red>')
		expect(message).to.equal('\u001b[41mRed\u001b[0m');
	});

	it('should bold text', function() {
		var message = logColorMessage('<b>Bold</b>');
		expect(message).to.equal('\u001b[1mBold\u001b[22m');
	});

	it('should underline text', function() {
		var message = logColorMessage('<u>Underline</u>');
		expect(message).to.equal('\u001b[4mUnderline\u001b[24m');
	});

	it('should italicize text', function() {
		var message = logColorMessage('<i>Italic</i>');
		expect(message).to.equal('\u001b[3mItalic\u001b[23m');
	});

	// So annoying... Who cares if it works.
	// it('should blink text', function() {
	// 	var message = logColorMessage('<blink>Blink</blink>');
	// 	expect(message).to.equal('\u001b[5mBlink\u001b[25m');
	// });

	it('should allow nested tags', function() {
		var message = logColorMessage('Normal <b>Bold -> <red>Red -> <u>Underline</u> -> <bg-red>Red background</bg-red></red></b> normal.');
		expect(message).to.equal('Normal \u001b[1mBold -> \u001b[31mRed -> \u001b[4mUnderline\u001b[24m -> \u001b[41mRed background\u001b[0m\u001b[1m\u001b[31m\u001b[0m\u001b[1m\u001b[22m normal.');
	});
	
	it('should pass through unrecognized tags', function() {
		var message = logColorMessage('<mytag>Nothing</mytag>');
		expect(message).to.equal('<mytag>Nothing</mytag>');
	});

	// Can't be tested visually with spec reporter
	it('should reset if unclosed tags are present', function() {
		var message = logColorMessage('<red>Red');
		expect(message).to.equal('\u001b[31mRed\u001b[0m');
	});
});
