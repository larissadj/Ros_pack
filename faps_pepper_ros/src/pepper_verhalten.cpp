#include <ros/ros.h>
#include <actionlib/client/simple_action_client.h>
#include <naoqi_bridge_msgs/RunBehaviorAction.h>
int main (int argc, char **argv)
{
ros::init(argc, argv, "pepper_behavior1");
std::string behav_name;
ros::NodeHandle private_node_handle_("~");
private_node_handle_.param("behavior_name", behav_name, std::string("Belohnung_anzeigen/gitar_spielen"));
actionlib::SimpleActionClient<naoqi_bridge_msgs::RunBehaviorAction> ac("run_behavior", true);
ROS_INFO("Trying to start: %s",behav_name.c_str());
ROS_INFO("Waiting for action server to start.");
// wait for the action server to start
ac.waitForServer(); //will wait for infinite time
ROS_INFO("Action server started, sending goal.");
// send a goal to the action
naoqi_bridge_msgs::RunBehaviorGoal goal;
goal.behavior = behav_name;
ac.sendGoal(goal);
//wait for the action to return
bool finished_before_timeout = ac.waitForResult(ros::Duration(30.0));
if (finished_before_timeout)
{
actionlib::SimpleClientGoalState state = ac.getState();
ROS_INFO("Action finished: %s",state.toString().c_str());
}
else
ROS_INFO("Action did not finish before the time out.");
//exit
return 0;
}
//~/naoqi_sdk2/naoqi  ->Lokale NAOqi starten
//Choregraphe starten und mit dem simulierten Pepper verbinden
//roslaunch pepper_apps behaviors.launch nao_ip:=192.168.0.20  ->Starten des Action-Servers zum Ausführen von Behaviors auf dem Pepper
//rosrun faps_pepper_ros pepper_verhalten ->Starten eines (selbst erstellen RunBehaviorAction-Client-)Knotens
//oder rostopic pub /run_behavior/goal naoqi_bridge_msgs/RunBehaviorActionGoal "header:
//  seq: 0
//  stamp:
//    secs: 0
//    nsecs: 0
//  behavior: 'demo/Elefant'"
//Der Aktionsclient definiert auch Methoden zum Abbrechen eines Ziels, das eine Vorabnahmeanforderung an den Aktionsserver sendet. Bei korrekter Implementierung stoppt der Server das Ziel so schnell wie möglich. Die Methode zum Abbrechen des Ziels in SimpleActionServer lautet cancelGoal.
//http://wiki.ros.org/ROSNodeTutorialC%2B%2B

