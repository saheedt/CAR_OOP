'use strict';

class Car{
	constructor(name, model, type){
		if(typeof name === "undefined"){
			this.name = "General";
		}else{
			this.name = name;
		}
		if(typeof model === "undefined"){
			this.model = "GM";
		}else{
			this.model = model;
		}
		if(name === "Porshe" || name === "Koenigsegg"){
			this.numOfDoors = 2;
		}else{
			this.numOfDoors = 4;
		}
		if(typeof type === "undefined"){
			this.isSaloon = true;
		}else{
			this.type = type;
		}
		if(type === "trailer"){
			this.numOfWheels = 8;
			this.isSaloon = false;
		}else{
			this.numOfWheels = 4;
			this.isSaloon = true;
		}
		this.speed = 0 + ' km/h';
	}

	 drive(accel){
		if (this.type === "trailer"){
			let temp =  11 * accel;
			 this.speed = temp + ' km/h';
			 return this;
		}
		if (this.name === "Porshe"){
			let temp = 50 * accel;
			this.speed = temp + ' km/h';
			return this;		
		}

	}
}

module.exports = {
	Car: Car
}