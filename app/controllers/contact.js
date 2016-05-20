import Ember from 'ember';

export default Ember.Controller.extend({
	isEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/), 
	isLength: Ember.computed.gte('message.length','5'),
	isValid: Ember.computed.and('isEmail','isLength'),
	isDisabled: Ember.computed.not('isValid'),

	actions:{
		 sendMessage() {
         alert(`Saving of the following email address and message: ${this.get('emailAddress')} \n ${this.get('message')}`);
        this.set('responseMessage', 'Thank you for your message!');
        this.set('emailAddress','');
        this.set('message','');
    }
       

	}
});
