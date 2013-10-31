//
// DESKTOP TRANSITION: HOVER FADE
// -------------------------
Nav.registerTransition('hover-fade', {

  onSwitch: function(switchCondition){
    if (switchCondition) {
      // Add 'mouse' listeners and disable 'click.submenu'
      $(document)
        .on('mouseenter.submenu, mouseleave.submenu', this.options.submenu, this, this.Submenu.hover)
        .on('mouseenter.submenu, mouseleave.submenu', this.options.toggle, this, this.Submenu.toggle)
        .off('click.submenu')
    }
    else {
      // Add 'click.submenu' listeners and disable 'mouse'"
      $(document)
        .off('mouseenter.submenu, mouseleave.submenu')
        .on('click.submenu', this.options.toggle, this, this.Submenu.toggle)

    }
  },

  onToggle: function(isActive){}
});