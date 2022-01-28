import { action } from "@ember/object";
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AcUnit from '@mui/icons-material/AcUnit';
import deepOrange from '@mui/material/colors/deepOrange';

export default class TestAvatar extends Component {
  @tracked maxAvatarGroupSize = 5;
  @tracked avatarContent = 'B';
  @tracked avatarContentList = A(['Z', 'A', 'B', 'C']);
  @tracked avatarGroupSpacing = undefined;
  @tracked avatarVariant = undefined;
  @tracked avatarColorScheme = 'primary';
  @tracked avatarIcon = AccessAlarmRounded;
  @tracked avatarSX = { bgcolor: deepOrange[500] };


  constructor() {
    super(...arguments);
    this.acUnit = AcUnit;
  }

  @action
  onAvatarGroupSizeBtnClicked() {
    if (this.maxAvatarGroupSize === 5) {
      this.maxAvatarGroupSize = 2;
    } else {
      this.maxAvatarGroupSize = 5;
    }
  }

  @action
  onAvatarChangeNameBtnClicked() {
    this.avatarContent = 'W';
  }

  @action
  onAddAvatar() {
    this.avatarContentList.pushObject('Y');
  }

  @action
  onRemoveAvatar() {
    this.avatarContentList.popObject();
  }

  @action
  onMoveAvatarBlock() {
    const avatarBlock = document.getElementById('avatarBlock');
    document.getElementById('testBlock').appendChild(avatarBlock);
  }

  @action
  onAvatarSpacingBtnClicked() {
    if (this.avatarGroupSpacing) {
      this.avatarGroupSpacing = undefined;
    } else {
      this.avatarGroupSpacing = 20;
    }
  }

  @action
  onAvatarGroupVariantBtnClicked() {
    if (this.avatarVariant === undefined) {
      this.avatarVariant = 'rounded';
    } else {
      if (this.avatarVariant === 'rounded') {
        this.avatarVariant = 'square';
      } else {
        if (this.avatarVariant === 'square') {
          this.avatarVariant = undefined;
        }
      }
    }
  }

}






