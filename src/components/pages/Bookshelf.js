////

import React from 'react';

function Bookshelf({ selectedBooks }) {
return (
<div className="container mt-3">
<h2>Bookshelf</h2>
<div className="row">
{selectedBooks.map((book) => (
<div key={book.id} className="col-md-3">
<div className="card">
{book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
<img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top img-fluid" alt="..."/>
)}
<div className="card-body">
<a href={book.volumeInfo.previewLink} target="_blank">
<h5 className="card-title">{book.volumeInfo.title}</h5>
</a>
{book.volumeInfo.authors && (
<p className="card-text">{book.volumeInfo.authors.join(', ')}</p>
)}
</div>
</div>
</div>
))}
</div>
</div>
);
}

export default Bookshelf;