import request from '../utils/request';

export function query(param) {
    return request('/api/blog/findBlogForPage', {body: JSON.stringify(param)}); 
}

export function create(param) {
    return request('/api/blog/create', {body: JSON.stringify(param)}); 
}

export function update(param) {
    return request('/api/blog/update', {body: JSON.stringify(param)}); 
}

export function del(param) {
    return request('/api/blog/delete', {body: JSON.stringify(param)}); 
}

export function view(param) {
    return request('/api/blog/view', {body: JSON.stringify(param)}); 
}