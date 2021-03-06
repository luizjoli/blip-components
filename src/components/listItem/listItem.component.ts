import angular from 'core/angular';

class ListItem {
    listItemsCtrl: any;
    isChecked: boolean = false;

    constructor() {}

    $onInit() {
        this.listItemsCtrl.items = [...this.listItemsCtrl.items, this];
    }

    $onDestroy() {
        this.listItemsCtrl.items = this.listItemsCtrl.items.removeItem(this);
    }
}

export const ListItemComponent = angular
    .module('blipComponents.listItem', [])
    .component('listItem', {
        template: `
        <card class="pl4">
            <div class="flex">
                <checkbox class="mr4" ng-model="$ctrl.isChecked"></checkbox>
                <div ng-transclude></div>
            </div>
        </card>`,
        controller: ListItem,
        controllerAs: '$ctrl',
        transclude: true,
        require: {
            listItemsCtrl: '^^listItems',
        },
    })
    .name;
