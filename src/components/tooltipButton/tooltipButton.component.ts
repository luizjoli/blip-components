import angular from 'core/angular';
import './tooltipButton.scss';
import * as loading from 'assets/img/loading3.png';

class TooltipButton {
    tooltip: string;
    iconClass: string;
    iconName: string;
    busy: boolean;
    disabled: boolean;
    constructor() {}
}

export const TooltipButtonComponent = angular
    .module('blipComponents.tooltipButton', [])
    .component('tooltipButton', {
        controller: TooltipButton,
        controllerAs: '$ctrl',
        transclude: true,
        bindings: {
            tooltip: '@',
            iconClass: '@?',
            iconName: '@?',
            iconComponentColor: '@?',
            iconComponentWidth: '@?',
            iconComponentHeight: '@?',
            disabled: '<?',
            busy: '<?',
        },
        template: `
        <div class="tooltip-button">
            <button ng-disabled="$ctrl.disabled">
                <div ng-if="!$ctrl.busy">
                    <i ng-if="$ctrl.iconClass" class="icon icon-{{$ctrl.iconClass}}"></i>
                    <icon ng-if="$ctrl.iconName"
                        color="{{$ctrl.iconComponentColor}}"
                        name="{{$ctrl.iconName}}"
                        width="{{$ctrl.iconComponentWidth}}"
                        height="{{$ctrl.iconComponentHeight}}"
                        ></icon>
                    <div ng-transclude></div>
                </div>
                <div class="pa3" ng-if="$ctrl.busy">
                    <img class="spin" src="${loading}">
                </div>
            </button>
            <div class="text-container" ng-hide="$ctrl.busy">
                <span class="fw3">{{ $ctrl.tooltip }}</span>
            </div>
        </div>`,
    })
    .name;
