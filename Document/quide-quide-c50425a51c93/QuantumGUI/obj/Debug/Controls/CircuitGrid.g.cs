﻿#pragma checksum "..\..\..\Controls\CircuitGrid.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "465A5B6FAE8AF71F5BCA5D929B10598E"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.35312
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using QuIDE.Controls;
using QuIDE.Properties;
using QuIDE.ViewModels;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace QuIDE.Controls {
    
    
    /// <summary>
    /// CircuitGrid
    /// </summary>
    public partial class CircuitGrid : System.Windows.Controls.UserControl, System.Windows.Markup.IComponentConnector, System.Windows.Markup.IStyleConnector {
        
        
        #line 35 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Grid LayoutRoot;
        
        #line default
        #line hidden
        
        
        #line 40 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Grid mainGrid;
        
        #line default
        #line hidden
        
        
        #line 49 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ScrollViewer RegisterScroll;
        
        #line default
        #line hidden
        
        
        #line 54 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ItemsControl registerItemsControl;
        
        #line default
        #line hidden
        
        
        #line 158 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ScrollViewer GatesScroll;
        
        #line default
        #line hidden
        
        
        #line 163 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.ItemsControl stepItemsControl;
        
        #line default
        #line hidden
        
        
        #line 269 "..\..\..\Controls\CircuitGrid.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.Canvas drawing;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/QuIDE;component/controls/circuitgrid.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\Controls\CircuitGrid.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.LayoutRoot = ((System.Windows.Controls.Grid)(target));
            
            #line 37 "..\..\..\Controls\CircuitGrid.xaml"
            this.LayoutRoot.PreviewMouseWheel += new System.Windows.Input.MouseWheelEventHandler(this.LayoutRoot_PreviewMouseWheel);
            
            #line default
            #line hidden
            return;
            case 2:
            this.mainGrid = ((System.Windows.Controls.Grid)(target));
            return;
            case 3:
            this.RegisterScroll = ((System.Windows.Controls.ScrollViewer)(target));
            
            #line 52 "..\..\..\Controls\CircuitGrid.xaml"
            this.RegisterScroll.ScrollChanged += new System.Windows.Controls.ScrollChangedEventHandler(this.RegisterScroll_ScrollChanged);
            
            #line default
            #line hidden
            return;
            case 4:
            this.registerItemsControl = ((System.Windows.Controls.ItemsControl)(target));
            return;
            case 5:
            this.GatesScroll = ((System.Windows.Controls.ScrollViewer)(target));
            
            #line 162 "..\..\..\Controls\CircuitGrid.xaml"
            this.GatesScroll.ScrollChanged += new System.Windows.Controls.ScrollChangedEventHandler(this.GatesScroll_ScrollChanged);
            
            #line default
            #line hidden
            return;
            case 6:
            this.stepItemsControl = ((System.Windows.Controls.ItemsControl)(target));
            return;
            case 8:
            this.drawing = ((System.Windows.Controls.Canvas)(target));
            
            #line 272 "..\..\..\Controls\CircuitGrid.xaml"
            this.drawing.Drop += new System.Windows.DragEventHandler(this.drawing_Drop);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "4.0.0.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        void System.Windows.Markup.IStyleConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 7:
            
            #line 197 "..\..\..\Controls\CircuitGrid.xaml"
            ((System.Windows.Controls.Button)(target)).PreviewMouseLeftButtonDown += new System.Windows.Input.MouseButtonEventHandler(this.GateButton_MouseDown);
            
            #line default
            #line hidden
            
            #line 199 "..\..\..\Controls\CircuitGrid.xaml"
            ((System.Windows.Controls.Button)(target)).Drop += new System.Windows.DragEventHandler(this.GateButton_Drop);
            
            #line default
            #line hidden
            
            #line 200 "..\..\..\Controls\CircuitGrid.xaml"
            ((System.Windows.Controls.Button)(target)).DragEnter += new System.Windows.DragEventHandler(this.GateButton_DragEnter);
            
            #line default
            #line hidden
            
            #line 201 "..\..\..\Controls\CircuitGrid.xaml"
            ((System.Windows.Controls.Button)(target)).DragOver += new System.Windows.DragEventHandler(this.GateButton_DragOver);
            
            #line default
            #line hidden
            break;
            }
        }
    }
}

