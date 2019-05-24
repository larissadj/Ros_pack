#! /usr/bin/env python
import rospy
import actionlib
from naoqi_bridge_msgs.msg import RunBehaviorAction, RunBehaviorFeedback, RunBehaviorResult


class Actionserver():
    def __init__(self):
        #self._action_name = name
        self.ac_server = actionlib.SimpleActionServer("run_behavior", RunBehaviorAction, execute_cb=self.execute_cb, auto_start = False)
        topic = rospy.get_param('~topic', 'demo/Elefant')
        #self.ac_server = actionlib.SimpleActionServer("demo/Elefant", RunBehaviorAction, execute_cb=self.execute_cb, auto_start = False)
        #topic = rospy.get_param('~topic', 'demo/Elefant')
        rospy.loginfo('Trying to start :  %s', topic)
        rospy.loginfo('Waiting for action server to start.')
        self.ac_server.start()
      
    def execute_cb(self, goal):
        # helper variables
        r = rospy.Rate(1)
        success = True
        #feedback = RunBehaviorFeedback()
        #result = RunBehaviorResult() 
        
        
        # start executing the action
        goal.behavior = topic
        for i in range(0,topic):
            # check that preempt has not been requested by the client
        #goal.behavior = topic
		if self.ac_server.is_preempt_requested():
		    rospy.loginfo('%s: Preempted', topic)
		    self.ac_server.set_preempted()
		    success = False
		    break
#######################################################################
            #Dans ce cas la for schleife devrait exister
            #si par exemple la variable variable_de_feedb est un string
            #variable_de_feedb = 'bowl-'+ str(i)
            #feedback.variable_de_feedb = variable_de_feedb
            #result.variable_de_result.append(variable_de_feedb)
            #self.ac_server.publish_feedback(feedback)
            #r.sleep()
#######################################################################
            #self._feedback.sequence.append(self._feedback.sequence[i] + self._feedback.sequence[i-1])
            # publish the feedback
            #self._as.publish_feedback(self._feedback)
            # this step is not necessary, the sequence is computed at 1 Hz for demonstration purposes
            #r.sleep()
###########################################################################         
        if success:
            rospy.loginfo('%s: Succeeded' , topic)
            #self.ac_sever.set_succeeded(result)
        
if __name__ == '__main__':
    rospy.init_node('pepper_bev_server')
    server = Actionserver()
    rospy.spin()

#Make the python file executable
#cd catkin_ws$  source/devel/setuo.bash
#cd catkin_ws/src/faps_pepper_ros$ chmod +x scripts/pepper_bev_server.py
#cd chmod 7777 scripts/

