import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-color-translator',
  templateUrl: './color-translator.component.html',
  styleUrls: ['./color-translator.component.less']
})
export class ColorTranslatorComponent implements OnInit, AfterViewInit {

  robotForm: FormGroup;
  robot: any;
  robotDirection: string;
  yValueOfLeftX: string;
  listening: boolean;
  mapPassword: string;
  timerId: any;
  timeToRequestMessage: number;
  timeToPrintNext: number;
  minimumTimeToPrintNext: number;
  prePositionX: number;
  prePositionY: number;
  stepToGoAtOnceNow: number;
  secondToGoForwardOneUnit: number;
  secondToTurn90Degree: number;
  secondToPrintEachColor: number;
  routeQueue: string[];
  onTheWayUturn: boolean;
  totalDirectionQueue: string[];
  totalColorQueue: string[];

  constructor(private elementRef: ElementRef, private apiService: ApiService, fb: FormBuilder) {
    this.robot = {
      _id: '',
      name: '',
      position: {x:0, y:0},
      direction: 'y-',
      _map: ''
    };
    this.robotDirection = 'y-';
    this.yValueOfLeftX = 'y-';
    this.mapPassword = '';
    this.listening = false;
    this.robotForm = fb.group({
      'mapId': [null, [Validators.required, Validators.pattern('[0-9A-Za-z]*')]],
      'robotName': [null, [Validators.required, Validators.pattern('[0-9A-Za-zàâçéèêëîïôûùüÿñæœäöüÀÂÇÉÈÊËÎÏÔÛÙÜŸÑÆŒÄÖÜß&:)(,.+–?!/\' -]*')]],
      'positionX': [null, [Validators.required, Validators.pattern('[0-9\-]*')]],
      'positionY': [null, [Validators.required, Validators.pattern('[0-9\-]*')]],
      'password': [null]
    });
    this.timeToRequestMessage = 5000;
    this.timeToPrintNext = 0;
    this.minimumTimeToPrintNext = 3000;
    this.prePositionX = null;
    this.prePositionY = null;
    this.stepToGoAtOnceNow = 0;
    this.secondToGoForwardOneUnit = 1000;
    this.secondToTurn90Degree = 2000;
    this.secondToPrintEachColor = 500;
    this.routeQueue = [];
    this.onTheWayUturn = false;
    this.totalDirectionQueue = [];
    this.totalColorQueue = [];
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }

  changeRobotStatus(event, property, value): void {
    event.preventDefault();
    
    switch (property) {
      case 'direction':
        this.robotDirection = value;
        break;
      case 'xleft':
        this.yValueOfLeftX = value;
        break;
      default:
        this.robot[property] = value;
        break;
    }
  }

  startListening(value: any): void {
    this.mapPassword = (value.password) ? value.password : '**';
    this.apiService.registerRobot(value.mapId, value.robotName, this.mapPassword).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('Server has trouble for registering this robot. Please try later.');
      } else {
        this.robot = res;
        this.apiService.setRobotPosition(this.robot._id, value.positionX, value.positionY, this.robotDirection).subscribe(res => {
          if (typeof res.error !== 'undefined') {
            alert('Server has trouble for set robot\'s position. Please try later.');
          } else {
            this.robot.direction = res.direction;
            this.robot.position = res.position;
            this.listening = true;
            this.calibrateBlack();
          }
        });
      }
    });
  }

  stopListening(): void {
    clearTimeout(this.timerId);
    this.apiService.deleteRobot(this.robot._id, this.mapPassword).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('Server has trouble for registering this robot. Please try later.');
      } else {
        this.listening = false;
        this.robot._id = '';
        this.robot.position.x = 0;
        this.robot.position.y = 0;
      }
    });
  }

  calibrateBlack(): void {
    //this.elementRef.nativeElement.querySelector('.listeningPanel').classList.add('black');
    //this.elementRef.nativeElement.querySelector('.listeningPanel h5').classList.add('w');
    //this.elementRef.nativeElement.querySelector('.listeningPanel h5').textContent = 'Calibrating black color...';
    this.printBgColorAndMsg('B', 'Calibrating black color...');
    this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          that.calibrateWhite();
        }
      }(this), 15000);
  }

  calibrateWhite(): void {
    this.printBgColorAndMsg('W', 'Calibrating white color...');
    this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          that.getMessageFromServer();
        }
      }(this), 5000);
  }

  printBgColorAndMsg(bgColor: string, msg: string): void {
    let bgColorClass: string;
    this.totalColorQueue.push(bgColor);

    switch (bgColor) {
      case 'B':
        bgColorClass = 'black';
        break;
      case 'W':
        bgColorClass = 'white';
        break;
      case 'R':
        bgColorClass = 'red';
        break;
    }
    this.elementRef.nativeElement.querySelector('.listeningPanel').classList.remove('white', 'black', 'red');
    this.elementRef.nativeElement.querySelector('.listeningPanel').classList.add(bgColorClass);
    this.elementRef.nativeElement.querySelector('.listeningPanel h5').textContent = msg;
  }

  printConsole(msg: string): void {
    this.totalDirectionQueue.push(msg);
    this.elementRef.nativeElement.querySelector('.listeningPanel h4').textContent = msg;
  }

  getMessageFromServer(): void {
    this.printBgColorAndMsg('W', 'Listening...');
    this.apiService.getRobotMessage(this.robot._id).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('Server has error');
      } else {
        this.robot = res;

        if (this.robot.routes.length > 0) {
          console.log(this.robot);
          this.printConsole('Route info is received. Start to print route.');
          this.managePrintingRoutes();
        } else {
          this.timerId = setTimeout(function(t) {
              let that = t;
              return function() {
                that.getMessageFromServer();
              }
            }(this), this.timeToRequestMessage);
        }
      }
    });
  }

  // Firstly move my virtual position first, then compare to pre-position. Then decide which message will be printed.
  managePrintingRoutes(): void {
    if (this.onTheWayUturn === true) {
      this.makeQueueUTurn();
    } else {
      //let positionNow = this.robot.routes.shift();
      let positionNext = this.robot.routes[0];

      //if (this.prePositionX === null && this.prePositionY === null) {
        this.prePositionX = this.robot.position.x;
        this.prePositionY = this.robot.position.y;
      //}

      if (this.robot.position.x === positionNext.x && this.robot.position.y === positionNext.y) {
        this.managePrintingRoutes();
        console.log('location is same. finish function.');
        return;
      } else {
        //this.robot.position.x = positionNow.x;
        //this.robot.position.y = positionNow.y;
        //this.robot.position.x = this.prePositionX;
        //this.robot.position.y = this.prePositionY;
      }

      if (positionNext.x > this.prePositionX) {
        switch (this.robot.direction) {
          case 'x+':
            this.measureDistanceForward();
            break;
          case 'x-':
            this.makeQueueUTurn();
            break;
          case 'y+':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnRight();
            } else {
              this.makeQueueTurnLeft();
            }
            break;
          case 'y-':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnLeft();
            } else {
              this.makeQueueTurnRight();
            }
            break;
          default:
            break;
        }
      } else if (positionNext.x < this.prePositionX) {
        switch (this.robot.direction) {
          case 'x+':
            this.makeQueueUTurn();
            break;
          case 'x-':
            this.measureDistanceForward();
            break;
          case 'y+':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnLeft();
            } else {
              this.makeQueueTurnRight();
            }
            break;
          case 'y-':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnRight();
            } else {
              this.makeQueueTurnLeft();
            }
            break;
          default:
            break;
        }
      } else if (positionNext.y > this.prePositionY) {
        switch (this.robot.direction) {
          case 'x+':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnLeft();
            } else {
              this.makeQueueTurnRight();
            }
            break;
          case 'x-':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnRight();
            } else {
              this.makeQueueTurnLeft();
            }
            break;
          case 'y+':
            this.measureDistanceForward();
            break;
          case 'y-':
            this.makeQueueUTurn();
            break;
          default:
            break;
        }
      } else if (positionNext.y < this.prePositionY) {
        switch (this.robot.direction) {
          case 'x+':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnRight();
            } else {
              this.makeQueueTurnLeft();
            }
            break;
          case 'x-':
            if (this.yValueOfLeftX === 'y+') {
              this.makeQueueTurnLeft();
            } else {
              this.makeQueueTurnRight();
            }
            break;
          case 'y+':
            this.makeQueueUTurn();
            break;
          case 'y-':
            this.measureDistanceForward();
            break;
          default:
            break;
        }
      }

      this.prePositionX = positionNext.x;
      this.prePositionY = positionNext.y;
    }

    this.printColorsByQueue();
  }

  measureDistanceForward(): void {
    

    if (this.robot.routes.length > 0 ) {
      let nextPosition = this.robot.routes[0];

      if (this.robot.direction === 'x+' && this.robot.position.y != nextPosition.y) {
        this.makeQueueGoForward();
      } else if (this.robot.direction === 'x-' && this.robot.position.y != nextPosition.y) {
        this.makeQueueGoForward();
      } else if (this.robot.direction === 'y+' && this.robot.position.x != nextPosition.x) {
        this.makeQueueGoForward();
      } else if (this.robot.direction === 'y-' && this.robot.position.x != nextPosition.x) {
        this.makeQueueGoForward();
      } else {
        let positionNext = this.robot.routes.shift();
        this.stepToGoAtOnceNow += 1;
        this.robot.position.x = positionNext.x;
        this.robot.position.y = positionNext.y;
        this.measureDistanceForward();
        //this.managePrintingRoutes();
      }
    } else {
      this.makeQueueGoForward();
    }
  }

  makeQueueGoForward(): void {
    this.routeQueue.push('B','W','B','W');

    let strBinary = this.stepToGoAtOnceNow.toString(2);
    let arrBinary = strBinary.split('');

    for (let val of arrBinary) {
      this.routeQueue.push('B');
      if (val === '0') {
        this.routeQueue.push('W');
      } else {
        this.routeQueue.push('R');
      }
    }

    this.timeToPrintNext = this.secondToGoForwardOneUnit * this.stepToGoAtOnceNow;
    if (this.timeToPrintNext < this.minimumTimeToPrintNext) {
      this.timeToPrintNext = this.minimumTimeToPrintNext;
    }
    this.printConsole(`Move forward ${this.stepToGoAtOnceNow} cells`);
    this.stepToGoAtOnceNow = 0;
  }

  makeQueueTurnLeft(): void {
    if (this.yValueOfLeftX === 'y+') {
      switch (this.robot.direction) {
        case 'x+':
          this.robot.direction = 'y+';
          break;
        case 'x-':
          this.robot.direction = 'y-';
          break;
        case 'y+':
          this.robot.direction = 'x-';
          break;
        case 'y-':
          this.robot.direction = 'x+';
          break;
        default:
          break;
      }
    } else {
      switch (this.robot.direction) {
        case 'x+':
          this.robot.direction = 'y-';
          break;
        case 'x-':
          this.robot.direction = 'y+';
          break;
        case 'y+':
          this.robot.direction = 'x+';
          break;
        case 'y-':
          this.robot.direction = 'x-';
          break;
        default:
          break;
      }
    }

    this.routeQueue.push('B','W','B','R');
    this.timeToPrintNext = this.secondToTurn90Degree;
    this.printConsole('Turn left');
    this.stepToGoAtOnceNow = 0;
  }

  makeQueueTurnRight(): void {
    if (this.yValueOfLeftX === 'y+') {
      switch (this.robot.direction) {
        case 'x+':
          this.robot.direction = 'y-';
          break;
        case 'x-':
          this.robot.direction = 'y+';
          break;
        case 'y+':
          this.robot.direction = 'x+';
          break;
        case 'y-':
          this.robot.direction = 'x-';
          break;
        default:
          break;
      }
    } else {
      switch (this.robot.direction) {
        case 'x+':
          this.robot.direction = 'y+';
          break;
        case 'x-':
          this.robot.direction = 'y-';
          break;
        case 'y+':
          this.robot.direction = 'x-';
          break;
        case 'y-':
          this.robot.direction = 'x+';
          break;
        default:
          break;
      }
    }

    this.routeQueue.push('B','R','B','W');
    this.timeToPrintNext = this.secondToTurn90Degree;
    this.printConsole('Turn Right');
    this.stepToGoAtOnceNow = 0;
  }

  makeQueueUTurn(): void {
    this.onTheWayUturn = !this.onTheWayUturn;
    this.makeQueueTurnLeft();
  }

  printColorsByQueue(): void {
    let colorNow = this.routeQueue.shift();
    this.printBgColorAndMsg(colorNow, colorNow);

    if (this.routeQueue.length > 0) {
      this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          that.printColorsByQueue();
        }
      }(this), this.secondToPrintEachColor);
    } else {
      this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          that.waitUntilNextQueue();
        }
      }(this), this.secondToPrintEachColor);
    }
  }

  waitUntilNextQueue(): void {
    this.printConsole('');
    this.printBgColorAndMsg('W', `waiting for ${this.timeToPrintNext}m sec`);
    if (this.robot.routes.length > 0) {
      this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          //that.managePrintingRoutes();
          that.apiService.setRobotPosition(that.robot._id, that.robot.position.x, that.robot.position.y, that.robot.direction).subscribe(res => {
            if (typeof res.error !== 'undefined') {
              alert('Server has error');
            } else {
              that.managePrintingRoutes();
            }
          });
        }
      }(this), this.timeToPrintNext);
    } else {
      this.timerId = setTimeout(function(t) {
        let that = t;
        return function() {
          that.apiService.setRobotPosition(that.robot._id, that.robot.position.x, that.robot.position.y, that.robot.direction).subscribe(res => {
            if (typeof res.error !== 'undefined') {
              alert('Server has error');
            } else {
              that.printConsole('Trying finish movement...');
              that.idleRobot();
            }
          });
        }
      }(this), this.timeToPrintNext);
    }
  }

  idleRobot(): void {
    this.apiService.setRobotFree(this.robot._id).subscribe(res => {
      if (typeof res.error !== 'undefined') {
        alert('Server has error');
      } else {
        this.printConsole('');
        this.getMessageFromServer();
        console.log(this.totalColorQueue);
        console.log(this.totalDirectionQueue);
      }
    });
  }
}
