function Form(parent)
{
	//Parent
	if(parent === undefined)
	{
		this.parent = document.body;
	}
	else
	{
		this.parent = parent;
	}
	
	//ID
	var id = "form" + Form.id;
	Form.id++;

	//Create division
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";
	
	//Element atributes
	this.fit_parent = true;
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//Form conter
Form.id = 0;

//Functions Prototype
Form.prototype.update = update;
Form.prototype.updateInterface = updateInterface;
Form.prototype.destroy = destroy;
Form.prototype.add = add;

//Add element to form
function add()
{
	//TODO <ADD CODE HERE>
}

//Remove element
function destroy()
{
	this.parent.removeChild(this.element);
}

//Update Form
function update(){}

//Update division Size
function updateInterface()
{
	if(this.fit_parent)
	{
		this.size.x = this.parent.offsetWidth;
		this.size.y = this.parent.offsetHeight; 
	}

	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}

	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}