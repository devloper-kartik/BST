class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(val){
        let node = new Node(val);

        if(this.root==null){
            this.root=node;
            return this;
        } 
        let current = this.root;
        while(current){
            if(val==current.val) return null;
            if(val<current.val){
                if(current.left==null){
                    current.left=node;
                    return this;
                }
                current=current.left;
            }else{
                if(current.right==null){
                    current.right=node;
                    return this;
                }
                current=current.right;
            }
        }
    }


    search(val){
        if(!this.root) return false;
        let current = this.root;
        while(current){
            if(val<current.val){
                current=current.left;
            }else if(val>current.val){
                current=current.right;
            }else{
                return current;
            }
        }
        return null;
    }

}

let tree = new BST();

console.log(tree.insert(4));
console.log(tree.insert(7));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.search(3));
