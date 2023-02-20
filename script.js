//your code here
// Get all the grid items and store them in an array
const gridItems = document.querySelectorAll('.grid-item');

function reset() {
  // Loop through each grid item and set its background color to transparent
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = 'transparent';
  }
}

// Add event listener to the "Reset" button
document.getElementById('reset_button').addEventListener('click', reset);

// Add event listener to the "Change" button
document.getElementById('change_button').addEventListener('click', function() {
  // Get the block ID and color input from the user
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  // Find the grid item with the corresponding ID and set its background color to the user input
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert('Invalid block ID!');
  }
});