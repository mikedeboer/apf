/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 */

// #ifdef __EDITOR || __INC_ALL

jpf.editor.dateTimePlugin = function(sName) {
    this.name        = sName;
    this.icon        = sName;
    this.type        = jpf.editor.TOOLBARITEM;
    this.subType     = jpf.editor.TOOLBARBUTTON;
    this.hook        = 'ontoolbar';
    this.keyBinding  = sName == "insertdate" ? 'ctrl+shift+d' : 'ctrl+shift+t';
    this.state       = jpf.editor.OFF;

    this.execute = function(editor) {
        // @todo Internationalize this!
        var dt = new Date();
        if (this.name == "insertdate")
            editor.insertHTML(dt.getDate() + '-' + dt.getMonth() + '-' + dt.getFullYear());
        else
            editor.insertHTML(dt.getHours().toPrettyDigit() + ":"
              + dt.getMinutes().toPrettyDigit() + ":"
              + dt.getSeconds().toPrettyDigit());
    };
    
    this.queryState = function() {
        return this.state;
    };
};

jpf.editor.Plugin('insertdate', jpf.editor.dateTimePlugin);
jpf.editor.Plugin('inserttime', jpf.editor.dateTimePlugin);

// #endif
