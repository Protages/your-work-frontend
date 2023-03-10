import React, { useEffect, useState, useRef, useContext } from 'react';
import { Button, Stack, Container, Card, Row, Col, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useFetch } from "../hooks/useFetch";

import LoginService from '../API/LoginService';
import { createSearchParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../helpers/setToken'


const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    localStorage.removeItem('account_type')
    localStorage.removeItem('related_obj_id')
    window.location.reload(false);

    // return <Navigate to="/vacancies" replace />
}

export default Logout