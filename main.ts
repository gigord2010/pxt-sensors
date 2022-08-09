//% weight=0 color=#3CB371 icon="\uf2db" block="sensors"
namespace sensors {
	//% blockId=DDMmotor block="Mcontrol p1|direction of Mcontrol(0~1) %McontrolValue|speed of MSpeed(0~255) %MSpeedValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
	//% MSpeedValue.min=0 MSpeedValue.max=255
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    
    export function DDMmotor(McontrolValue: number,MSpeedValue: number): void {
        pins.digitalWritePin(DigitalPin.P1, McontrolValue);
        pins.analogWritePin(AnalogPin.P8, MSpeedValue);	   
    }
}
