"use client";
import { useUser } from '@clerk/nextjs';
import { Button } from '../../../../components/ui/button';
import React, { useEffect } from 'react';
import Link from 'next/link';
import GlobalApi from '../../../../_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from "sonner";

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const { user } = useUser();
  const router = useRouter();
  
  // Replace this with actual logic to determine membership status
  const isMember = user?.memberships?.some(membership => membership.isActive);

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  // Enroll to the Course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        console.log(resp);
        if (resp) {
          toast("User Enrolled Successfully", {
            description: "User Enrolled this course",
          });
          router.push('/watch-course/' + resp.createUserEnrollCourse.id);
        }
      })
      .catch(error => {
        console.error("Enrollment failed", error);
        toast.error("Enrollment failed", {
          description: "Please try again later",
        });
      });
  };

  return (
    <div className='p-3 text-center rounded-2xl bg-primary flex flex-col gap-3'>
      <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>

      {user ? (
        !isUserAlreadyEnrolled ? (
          (isMember || courseInfo.free) ? (
            <div className='flex flex-col gap-3 mt-3'>
              <h2 className='text-white font-light'>Enroll Now to Start Learning & Upskilling yourself</h2>
              <Button 
                className='bg-white text-primary hover:bg-white hover:text-primary rounded-full'
                onClick={onEnrollCourse}
              >
                Enroll Now
              </Button>
            </div>
          ) : (
            <div className='flex flex-col gap-3 mt-3'>
              <h2 className='text-white font-light'>Buy Monthly Membership & Get Access to All Courses</h2>
              <Button className='bg-white text-primary hover:bg-white hover:text-primary rounded-full'>
                Buy Membership ₹499
              </Button>
            </div>
          )
        ) : (
          <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Continue to Learn your course</h2>
            <Link href={'/watch-course/' + isUserAlreadyEnrolled}>
              <Button className='bg-white text-primary hover:bg-white hover:text-primary rounded-full'>
                Continue
              </Button>
            </Link>
          </div>
        )
      ) : (
        <div className='flex flex-col gap-3 mt-3'>
          <h2 className='text-white font-light'>Enroll Now to Start Learning & Upskilling yourself</h2>
          <Link href={'/sign-in'}>
            <Button className='bg-white text-primary hover:bg-white hover:text-primary rounded-full'>
              Enroll Now
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
