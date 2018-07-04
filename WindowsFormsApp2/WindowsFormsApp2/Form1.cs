using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp2
{
    public partial class Form1 : Form
    {
        double value = 0;
        string operation = "";
        bool pressed = true;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        

        private void button_Click(object sender, EventArgs e)

        {
            if ((RESULT.Text == "0")||(!pressed))
            {
                RESULT.Text = "";
            }
            pressed = true;
            Button B = (Button)sender;
            RESULT.Text = RESULT.Text + B.Text;
        }

        private void button16_Click(object sender, EventArgs e)
        {
            RESULT.Clear();
            RESULT.Text = "0";
        }

        private void button11_Click(object sender, EventArgs e)
        {

        }

        private void operators_ops(object sender, EventArgs e)
        {
            Button B = (Button)sender;
            operation = B.Text;
            value = double.Parse(RESULT.Text);
            pressed = false;
            equation.Text = value.ToString()+ " " + operation;
          
           
        }

        private void button18_Click(object sender, EventArgs e)
        {
            if (operation == "+")

            {
               
                RESULT.Text = $"{value+ double.Parse(RESULT.Text)}";

            }
            if (operation == "-")
            {
                RESULT.Text = $"{value - double.Parse(RESULT.Text)}";
            }
            if (operation == "/")
            {
                RESULT.Text = $"{value / double.Parse(RESULT.Text)}";
            }
            if (operation == "*")
            {
                RESULT.Text = $"{value * double.Parse(RESULT.Text)}";
            }
            pressed = false;
            equation.Text = "";
        }

        private void button19_Click(object sender, EventArgs e)
        {
            if (RESULT.Text == "0")
            {
                RESULT.Text = "";
            }
            Button B = (Button)sender;
            RESULT.Text = RESULT.Text + B.Text;
            
           
        }
    }
}
