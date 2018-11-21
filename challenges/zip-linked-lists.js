/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2, pointCounter = 0) {
	//declare variable temp to store the nocde that l1's head points to
  if (l2 === null) return l1
	let temp;
	//declare pointCounter  === 1
	let position = l1.next;
  let listPointer = l1;
	//get to the node whose next you can to change
	// put l1's next in temp
	for (let i = 0; i < pointCounter ; i ++) {
    if (pointCounter > 0) {listPointer = listPointer.next}
		position = position.next;
	}
  temp = position
	//have l1's next points to l2
	pointCounter ++;
	listPointer.next = l2;
	return zip(l1, temp, pointCounter)
};

module.exports = {Node: Node, zip: zip};
