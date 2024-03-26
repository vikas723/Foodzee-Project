import React from 'react';

const DynamicDataComponent = () => {
  const dynamicData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
  ];

  return (
    <div>
      <h2>Dynamic Data Component</h2>
      <ul>
        {/* Map over the dynamic data array and render a list item for each object */}
        {dynamicData.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicDataComponent;