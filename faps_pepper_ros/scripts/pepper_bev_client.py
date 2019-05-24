#! /usr/bin/env python
import roslib
import sys
roslib.load_manifest('faps_pepper_ros')
import rospy
import actionlib
from naoqi_bridge_msgs.msg import RunBehaviorAction, RunBehaviorGoal

#from chores.msg import DoDishesAction, DoDishesGoal
#falcultatif
def feedback_cb(msg):
    print 'feedback received:',msg


#############################################################
def call_server():
     
     #topic = rospy.get_param('~topic', 'run_behavior')
     topic = rospy.get_param('~topic', 'demo/Elefant')
     rospy.loginfo('Trying to start :  %s', topic)
     rospy.loginfo('Waiting for action server to start.') 
 
     client = actionlib.SimpleActionClient('run_behavior', RunBehaviorAction) 
     client.wait_for_server() 
     rospy.loginfo("Action server started, sending goal.")
     goal = RunBehaviorGoal()
     #goal.#goal here is behavior see syntax
     goal.behavior = topic;
     client.send_goal(goal,feedback_cb=feedback_cb)
     client.wait_for_result(rospy.Duration.from_sec(5.0))
     #state = actionlib.SimpleClientGoalState() 
     result = client.get_result()
     return result
        
     #else:
        #rospy.loginfo("Action did not finish before the time out.") 

if __name__ == '__main__':

     try:
         rospy.init_node('pepper_bev')
         result = call_server()
         rospy.loginfo("Action finished: %s ",result) 
     except rospy.ROSInterruptException as e:
         rospy.loginfo("Action wird unterbrochen", e)
  
     #topic = rospy.get_param("bevav_name",behav_name,'demo/Elefant')
    # rospy.loginfo('Trying to start :  %s', topic)
    # rospy.loginfo('Waiting for action server to start.')  
# wait for the action server to start
# send a goal to the action
 #   goal = RunBehaviorGoal()
 #   goal.behavior = behav_name
 #   client.wait_for_server() #will wait for infinite time 
 #   client = actionlib.SimpleActionClient('run_behavior', RunBehaviorAction)  
    # Fill in the goal here
    #client.send_goal(goal)
    #bool finished_before_timeout =client.wait_for_result(rospy.Duration.from_sec(5.0))
