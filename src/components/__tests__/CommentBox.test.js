import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'some new comment' }
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('some new comment');
});

it('should be cleared after submitting', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'some new comment' }
    });
    wrapped.update();
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})